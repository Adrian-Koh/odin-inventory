const db = require("../db/queries");

function getCreateTeamForm(req, res) {
  res.render("createTeamForm");
}

async function createTeam(req, res) {
  const teamname = req.body.teamname;
  await db.insertTeam(teamname);
  res.redirect("/");
}

module.exports = { getCreateTeamForm, createTeam };
