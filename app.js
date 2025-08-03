require("dotenv").config();
const path = require("node:path");
const express = require("express");
const app = express();

const indexRouter = require("./routes/indexRouter");
const teamRouter = require("./routes/teamRouter");

app.set("view engine", "ejs");
app.use(express.static(path.join(__dirname, "public")));

app.use("/", indexRouter);
app.use("/team", teamRouter);

const PORT = 8000;
app.listen(PORT, () => console.log(`Listening on PORT ${PORT}`));
