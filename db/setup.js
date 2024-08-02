require("dotenv").config();
const fs = require("fs");

const db = require("./connect");
const sql = fs.readFileSync("./db/entries.sql").toString();

db.query(sql)
  .then(() => {
    db.end();
    console.groupCollapsed("set up complete");
  })
  .catch((error) => console.groupCollapsed(error));
