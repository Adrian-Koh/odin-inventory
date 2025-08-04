const pool = require("./pool");

async function getAllTeams() {
  const { rows } = await pool.query("SELECT * FROM teams");
  return rows.sort((a, b) => a.teamid - b.teamid);
}

async function getTeamFromID(teamid) {
  const { rows } = await pool.query(
    `SELECT * FROM teams WHERE teamid=${teamid}`
  );
  return rows;
}

async function insertTeam(teamname) {
  await pool.query("INSERT INTO teams (teamname) VALUES ($1)", [teamname]);
}

async function editTeam(team) {
  await pool.query("UPDATE teams SET teamname=$1 WHERE teamid=$2", [
    team.teamname,
    team.teamid,
  ]);
}

async function getPlayersFromTeamID(teamid) {
  const { rows } = await pool.query(
    `SELECT * FROM players WHERE teamid=${teamid}`
  );
  return rows;
}

async function insertPlayer(teamid, playername, position) {
  await pool.query(
    "INSERT INTO players (name, teamid, position) VALUES ($1, $2, $3)",
    [playername, teamid, position]
  );
}

module.exports = {
  getAllTeams,
  getTeamFromID,
  insertTeam,
  editTeam,
  getPlayersFromTeamID,
  insertPlayer,
};
