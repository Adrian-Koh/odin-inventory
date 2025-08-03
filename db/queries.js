const pool = require("./pool");

async function getAllTeams() {
  const { rows } = await pool.query("SELECT * FROM teams");
  return rows;
}

async function insertTeam(teamname) {
  await pool.query(`INSERT INTO teams (teamname) VALUES ('${teamname}')`);
}

module.exports = { getAllTeams, insertTeam };
