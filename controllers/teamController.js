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

async function getCreatePlayer(req, res) {
  const { teamid } = req.params;
  const action = "new";
  const postLink = `/team/${teamid}/newPlayer`;
  const title = "Add player";

  res.render("createPlayerForm", { action, postLink, title });
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
  const { teamid } = req.params;
  const action = "edit";
  const postLink = "/team/edit/" + teamid;
  const title = "Edit team";
  const team = await getTeamFromID(teamid);

  res.render("createTeamForm", { action, postLink, title, team });
}

async function getCreateTeam(req, res) {
  const action = "new";
  const postLink = "/team/new";
  const title = "Add team";

  res.render("createTeamForm", { action, postLink, title });
}

async function postEditTeam(req, res) {
  const teamname = req.body.teamname;
  const { teamid } = req.params;
  const team = { teamid, teamname };
  await db.editTeam(team);
  res.redirect("/");
}

async function getDeleteTeam(req, res) {
  const { teamid } = req.params;
  await db.deleteTeam(teamid);
  res.redirect("/");
}

module.exports = {
  createTeam,
  getPlayersFromTeam,
  getCreatePlayer,
  createPlayer,
  getEditTeam,
  postEditTeam,
  getCreateTeam,
  getDeleteTeam,
};
