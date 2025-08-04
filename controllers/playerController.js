const db = require("../db/queries");

async function getEditPlayer(req, res) {
  const { teamid, playerid } = req.params;
  const action = "edit";
  const postLink = `/player/edit/${teamid}/${playerid}`;
  const title = "Edit player";
  const player = await db.getPlayerFromID(playerid);

  res.render("createPlayerForm", { action, postLink, title, player });
}

async function postEditPlayer(req, res) {
  const { playername, position } = req.body;
  const { teamid, playerid } = req.params;
  const player = { playerid, playername, position };
  await db.editPlayer(player);
  res.redirect("/team/" + teamid);
}

async function getDeletePlayer(req, res) {
  //   const { teamid, playerid } = req.params;
  //   await db.deletePlayer(playerid);
  //   res.redirect("/team/" + teamid);
}

module.exports = {
  getEditPlayer,
  postEditPlayer,
  getDeletePlayer,
};
