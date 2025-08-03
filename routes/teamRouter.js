const teamController = require("../controllers/teamController");
const { Router } = require("express");
const teamRouter = Router();

teamRouter.post("/new", teamController.createTeam);
teamRouter.get("/:teamid", teamController.getPlayersFromTeam);
teamRouter.post("/:teamid/newPlayer", teamController.createPlayer);

module.exports = teamRouter;
