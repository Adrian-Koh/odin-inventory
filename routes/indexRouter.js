const indexController = require("../controllers/indexController");
const { Router } = require("express");
const indexRouter = Router();

indexRouter.get("/", indexController.createHomepage);

module.exports = indexRouter;
