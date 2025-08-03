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
  const players = await db.getPlayersFromTeamID(teamid);
  const result = players
    .map(
      (player) => `Player name: ${player.name}, position: ${player.position}.`
    )
    .join("\n");
  res.send(result);
}

module.exports = { getCreateTeamForm, createTeam, getPlayersFromTeam };
