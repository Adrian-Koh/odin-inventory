const teamController = require("../controllers/teamController");
const { Router } = require("express");
const teamRouter = Router();

teamRouter.get("/new", teamController.getCreateTeamForm);
teamRouter.post("/new", teamController.createTeam);
teamRouter.get("/:teamid", teamController.getPlayersFromTeam);

module.exports = teamRouter;
