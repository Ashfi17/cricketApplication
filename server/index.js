const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const logger = require("morgan");
const db = require("./connection");

const Team = require("./routes/apis/Team");
const Match = require("./routes/apis/Match");

const app = express();

app.use(cors());
app.use(bodyParser.json());
app.use(
  bodyParser.urlencoded({
    extended: false,
  })
);
app.use(logger("common"));

app.use("/apis/team", Team);
app.use("/apis/match", Match);
//checking database connection
db.connect()
  .then((res) => {
    console.log("connection established succesfully");
  })
  .catch((err) => {
    console.log("not connected");
  });

const port = process.env.port || 5000;
if (process.env.NODE_ENV !== "test")
  app.listen(port, () => console.log(`Server is listening on port ${port}`));

module.exports = app;
