const db = require("../db/queries");

async function createTeam(req, res) {
  const teamname = req.body.teamname;
  await db.insertTeam(teamname);
  res.redirect("/");
}

async function getPlayersFromTeam(req, res) {
  const { teamid } = req.params;
  const team = await getTeamFromID(teamid);

  const players = await db.getPlayersFromTeamID(teamid);
  res.render("team", { team, players });
}

async function createPlayer(req, res) {
  const { teamid } = req.params;
  const { playername, position } = req.body;

  await db.insertPlayer(teamid, playername, position);
  res.redirect("/team/" + teamid);
}

async function getTeamFromID(teamid) {
  const teams = await db.getTeamFromID(teamid);
  let team;
  if (teams.length > 0) {
    team = teams[0];
  } else {
    throw new Error(`No team found with teamid=${teamid}.`);
  }
  return team;
}

async function getEditTeam(req, res) {
  const action = "edit";
  const postLink = "/team/edit";
  const title = "Edit team";
  const { teamid } = req.params;
  const team = await getTeamFromID(teamid);

  res.render("createTeamForm", { action, postLink, title, team });
}

async function getCreateTeam(req, res) {
  const action = "new";
  const postLink = "/team/new";
  const title = "Add team";

  res.render("createTeamForm", { action, postLink, title });
}

async function getDeleteTeam(req, res) {}

module.exports = {
  createTeam,
  getPlayersFromTeam,
  createPlayer,
  getEditTeam,
  getCreateTeam,
  getDeleteTeam,
};
