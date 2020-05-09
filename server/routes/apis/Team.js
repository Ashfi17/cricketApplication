const express = require("express");
const router = express.Router();
const db = require("../../connection");

//api to get all team
router.get("/all-teams", async (req, res, next) => {
  try {
    const teams = await db.any(`SELECT * FROM team`);
    if (!teams) {
      res.status(400).send({
        status: 400,
        message: "No teams for the team present at the moment",
      });
    } else {
      res.status(200).send({
        status: 200,
        data: teams,
        message: "All teams  retrieved successfully",
      });
    }
  } catch (e) {
    next(e);
  }
});

//api to get players of a team
router.get("/players/:team_name", async (req, res, next) => {
  const teamName = req.params.team_name;
  try {
    const players = await db.any(
      `SELECT * FROM player where player_country = '${teamName}'`
    );
    if (!players) {
      res.status(400).send({
        status: 400,
        message: "No players for the team present at the moment",
      });
    } else {
      res.status(200).send({
        status: 200,
        data: players,
        message: "All players of the team retrieved successfully",
      });
    }
  } catch (e) {
    next(e);
  }
});

module.exports = router;
