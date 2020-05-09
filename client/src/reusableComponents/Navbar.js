import React, { Component } from "react";
import "../assets/styles/Navbar.css";
import { Link, Redirect } from "react-router-dom";

export default class Navbar extends Component {
  state = {
    active: true,
    searchInput: "",
    isChecked: window.innerWidth >= 526 ? true : false,
    width: window.innerWidth,
    redirect: false,
    pageLink: this.props.pageLink ? this.props.pageLink : "",
  };

  toggleChange = (pageLink) => {
    this.setState({ pageLink });
    window.innerWidth <= 526
      ? this.setState({ isChecked: !this.state.isChecked })
      : console.log("do nothing");
  };

  // handleSearchInputChange = e => {
  // 	this.setState({ [e.target.name]: e.target.value });
  // 	let search_term = {
  // 		search: this.state.searchInput
  // 	};
  // 	this.props.getSearch(search_term, this.props.history);
  // };

  componentDidMount() {
    window.addEventListener("resize", this.updateDimensions);
  }

  updateDimensions = () => {
    this.setState({
      width: window.innerWidth,
      isChecked: window.innerWidth >= 526 ? true : false,
    });
  };

  renderRedirect = () => {
    if (this.state.redirect) {
      return <Redirect to="/login" />;
    }
  };

  render() {
    return (
      <div className="nav-parent">
        {this.renderRedirect()}
        <nav className="menu">
          <ul>
            {/* brand name which is at left of navbar */}
            <li className="nav-brand-li">
              <Link
                to="/"
                id="nav-brand"
                // onClick={() => {
                //   this.setState({ pageLink: "" });
                // }}
              >
                CrickKraft
              </Link>
            </li>

            {/* hidden checkbox to show and hide the menu in small screen device */}
            <input
              type="checkbox"
              id="menu-btn"
              className="menu-btn"
              checked={this.state.isChecked}
              onClick={() => this.toggleChange(this.state.pageLink)}
            />

            {/* label for checkbox which makes the hamburger menu */}
            <label
              className="menu-icon"
              for="menu-btn"
              style={{
                display: this.state.width < 526 ? "block" : "none",
              }}
            >
              <span className="bars"></span>
            </label>

            {/* matches link */}
            <li
              className={
                this.state.pageLink === "matches" ? "item active-link" : "item"
              }
              style={{
                display: this.state.isChecked ? "block" : "none",
              }}
              onClick={() => this.toggleChange("matches")}
            >
              <Link className="link" to="/" id="matches">
                Matches
              </Link>
            </li>

            {/* teams link */}
            <li
              className={
                this.state.pageLink === "teams" ? "item active-link" : "item"
              }
              style={{
                display: this.state.isChecked ? "block" : "none",
              }}
              onClick={() => this.toggleChange("teams")}
            >
              <Link className="link" to="/teams" id="teams">
                Teams
              </Link>
            </li>

            {/* points-table link */}
            <li
              className={
                this.state.pageLink === "points-table"
                  ? "item active-link"
                  : "item"
              }
              style={{
                display: this.state.isChecked ? "block" : "none",
              }}
              onClick={() => this.toggleChange("points-table")}
            >
              <Link className="link" to="/points-table" id="points-table">
                Points table
              </Link>
            </li>

            {/* search box list item */}
            <li className="search-box-li">
              {/* search box to search for points-table and teams */}
              {/* <input
                id="searchInput"
                name="searchInput"
                className="search-box"
                value={this.state.searchInput}
                onChange={this.handleSearchInputChange}
                placeholder="Search for Team or Player"
              /> */}

              {/* shows search result after entering text in search boc */}

              <div
                className="search-result"
                style={{
                  display: this.state.searchInput ? "block" : "none",
                }}
              >
                {/* checks whether search has entries or not 
								if not then prints no result found */}
              </div>
            </li>
          </ul>
        </nav>
      </div>
    );
  }
}
