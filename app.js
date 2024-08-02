const express = require("express");
const cors = require("cors");

const logger = require("./logger");
const entriesRouter = require("./routers/entries");

const app = express();
app.use(express.json());
app.use(cors());
app.use("/", logger);

app.use("/entries", entriesRouter);

app.get("/", (req, res) => {
  res.status(200).json({
    title: "Personal Diary",
    description: "Log your favourite moments",
  });
});

module.exports = app;
