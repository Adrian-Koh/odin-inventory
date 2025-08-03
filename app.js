require("dotenv").config();
const express = require("express");
const app = express();

app.set("view engine", "ejs");

const PORT = 8000;
app.listen(PORT, () => console.log(`Listening on PORT ${PORT}`));
