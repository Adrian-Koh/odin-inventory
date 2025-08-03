require("dotenv").config();
const path = require("node:path");
const express = require("express");
const app = express();

const indexRouter = require("./routes/indexRouter");
const teamRouter = require("./routes/teamRouter");

app.set("view engine", "ejs");
app.use(express.static(path.join(__dirname, "public")));
app.use(express.urlencoded({ extended: true }));

app.use("/", indexRouter);
app.use("/team", teamRouter);

app.use((err, req, res, next) => {
  console.error(err);
  res.status(500).send(err.message);
});

const PORT = 8000;
app.listen(PORT, () => console.log(`Listening on PORT ${PORT}`));
