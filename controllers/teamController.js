const db = require("../db/queries");

async function createTeam(req, res) {
  const teamname = req.body.teamname;
  await db.insertTeam(teamname);
  res.redirect("/");
}

async function getPlayersFromTeam(req, res) {
  const { teamid } = req.params;
  const teams = await db.getTeamFromID(teamid);
  let team;
  if (teams.length > 0) {
    team = teams[0];
  } else {
    throw new Error(`No team found with teamid=${teamid}.`);
  }

  const players = await db.getPlayersFromTeamID(teamid);
  res.render("team", { team, players });
}

async function createPlayer(req, res) {
  const { teamid } = req.params;
  const { playername, position } = req.body;

  await db.insertPlayer(teamid, playername, position);
  res.redirect("/team/" + teamid);
}

module.exports = { createTeam, getPlayersFromTeam, createPlayer };
