const express = require("express");
const router = express.Router();
const db = require("../../connection");

router.get("/all/recent", async (req, res, next) => {
  try {
    const result = await db.any(`select match.match_no,match.match_date,match.innings_one_team as Team_One,match.innings_two_team as Team_Two,
        results.team_one_runs,results.team_two_runs,results.team_one_wicket,results.team_two_wicket,match.venue_name,results.outcome,results.player_of_the_match,results.match_winner
        from match inner join results on match.match_no = results.match_no ORDER BY match.match_date DESC LIMIT 5;`);
    if (!result) {
      res.status(400).send({
        message: "No Matches Found",
      });
    } else {
      res.status(200).send({
        data: result,
        message: "All Matches Retrieved successfully",
      });
    }
  } catch (e) {
    next(e);
  }
});
router.get("/single-match-detals/:match_no", async (req, res, next) => {
  const matchNo = req.params.match_no;
  try {
    const result = await db.any(`select match.match_no,match.match_date,match.innings_one_team as Team_One,match.innings_two_team as Team_Two,
        results.team_one_runs,results.team_two_runs,results.team_one_wicket,results.team_two_wicket,match.venue_name,results.outcome,results.player_of_the_match,results.match_winner
        from match inner join results on match.match_no = results.match_no where match.match_no = ${matchNo};`);
    if (!result) {
      res.status(400).send({
        message: "No Matches Found",
      });
    } else {
      res.status(200).send({
        data: result,
        message: "All Matches Retrieved successfully",
      });
    }
  } catch (e) {
    next(e);
  }
});

router.get("/all/:team_name", async (req, res, next) => {
  const teamName = req.params.team_name;
  try {
    const result = await db.any(`select match.match_no,match.match_date,match.innings_one_team as Team_One,match.innings_two_team as Team_Two,
          results.team_one_runs,results.team_two_runs,results.team_one_wicket,results.team_two_wicket,match.venue_name,results.outcome,results.player_of_the_match,results.match_winner
          from match inner join results on match.match_no = results.match_no where match.innings_one_team = '${teamName}' OR match.innings_two_team = '${teamName}' ;`);
    if (!result) {
      res.status(400).send({
        message: "No Matches Found",
      });
    } else {
      res.status(200).send({
        data: result,
        message: "All Matches Retrieved successfully",
      });
    }
  } catch (e) {
    next(e);
  }
});

module.exports = router;
