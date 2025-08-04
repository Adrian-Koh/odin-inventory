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
  return rows.sort((a, b) => a.playerid - b.playerid);
}

async function insertPlayer(teamid, playername, position) {
  await pool.query(
    "INSERT INTO players (name, teamid, position) VALUES ($1, $2, $3)",
    [playername, teamid, position]
  );
}

async function deleteTeam(teamid) {
  await pool.query("DELETE FROM players WHERE players.teamid=$1", [teamid]);
  await pool.query("DELETE FROM teams WHERE teamid=$1", [teamid]);
}

async function getPlayerFromID(playerid) {
  const { rows } = await pool.query("SELECT * FROM players WHERE playerid=$1", [
    playerid,
  ]);
  return rows[0];
}

async function editPlayer(player) {
  await pool.query(
    "UPDATE players SET name=$1, position=$2 WHERE playerid=$3",
    [player.playername, player.position, player.playerid]
  );
}

async function deletePlayer(playerid) {
  await pool.query("DELETE FROM players WHERE playerid=$1", [playerid]);
}

module.exports = {
  getAllTeams,
  getTeamFromID,
  insertTeam,
  editTeam,
  getPlayersFromTeamID,
  insertPlayer,
  deleteTeam,
  getPlayerFromID,
  editPlayer,
  deletePlayer,
};
