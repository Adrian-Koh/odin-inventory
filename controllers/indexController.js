const db = require("../db/queries");

async function createHomepage(req, res) {
  const teams = await db.getAllTeams();
  res.send(
    teams
      .map((team) => `Team: ${team.teamname}, ID: ${team.teamid}.`)
      .join("\n")
  );
}

module.exports = { createHomepage };
