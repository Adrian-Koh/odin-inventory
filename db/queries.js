const pool = require("./pool");

async function getAllTeams() {
  const { rows } = await pool.query("SELECT * FROM teams");
  return rows;
}

async function getTeamFromID(teamid) {
  const { rows } = await pool.query(
    `SELECT * FROM teams WHERE teamid=${teamid}`
  );
  return rows;
}

async function insertTeam(teamname) {
  await pool.query(`INSERT INTO teams (teamname) VALUES ('${teamname}')`);
}

async function getPlayersFromTeamID(teamid) {
  const { rows } = await pool.query(
    `SELECT * FROM players WHERE teamid=${teamid}`
  );
  return rows;
}

module.exports = {
  getAllTeams,
  getTeamFromID,
  insertTeam,
  getPlayersFromTeamID,
};
