const playerController = require("../controllers/playerController");
const { Router } = require("express");
const playerRouter = Router();

playerRouter.get("/edit/:teamid/:playerid", playerController.getEditPlayer);
playerRouter.post("/edit/:teamid/:playerid", playerController.postEditPlayer);
playerRouter.get("/delete/:teamid/:playerid", playerController.getDeletePlayer);

module.exports = playerRouter;
