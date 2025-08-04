const teamController = require("../controllers/teamController");
const { Router } = require("express");
const teamRouter = Router();

teamRouter.get("/new", teamController.getCreateTeam);
teamRouter.post("/new", teamController.createTeam);
teamRouter.get("/:teamid", teamController.getPlayersFromTeam);
teamRouter.post("/:teamid/newPlayer", teamController.createPlayer);
teamRouter.get("/edit/:teamid", teamController.getEditTeam);
teamRouter.post("/edit/:teamid", teamController.postEditTeam);
teamRouter.get("/delete/:teamid", teamController.getDeleteTeam);

module.exports = teamRouter;
