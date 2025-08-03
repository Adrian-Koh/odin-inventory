const db = require("../db/queries");

function getCreateTeamForm(req, res) {
  res.render("createTeamForm");
}

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

module.exports = { getCreateTeamForm, createTeam, getPlayersFromTeam };
