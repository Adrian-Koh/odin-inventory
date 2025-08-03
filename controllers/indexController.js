const db = require("../db/queries");

async function createHomepage(req, res) {
  const teams = await db.getAllTeams();
  res.render("index", { teams });
}

module.exports = { createHomepage };
