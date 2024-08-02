const db = require("../db/connect");

const createEntry = async (date, time, text, category) => {
  const res = await db.query(
    "INSERT INTO entries (date, time, text, category) VALUES ($1, $2, $3, $4) RETURNING *",
    [date, time, text, category]
  );
  return res.rows[0];
};

const getAllEntries = async () => {
  const res = await db.query(
    "SELECT * FROM entries ORDER BY date DESC, time DESC"
  );
  return res.rows;
};

const getEntryById = async (id) => {
  const res = await db.query("SELECT * FROM entries WHERE id = $1", [id]);
  return res.rows[0];
};

const updateEntry = async (id, text) => {
  const res = await db.query(
    "UPDATE entries SET text = $1 WHERE id = $2 RETURNING *",
    [text, id]
  );
  return res.rows[0];
};

const deleteEntry = async (id) => {
  await db.query("DELETE FROM entries WHERE id = $1", [id]);
};

module.exports = {
  createEntry,
  getAllEntries,
  getEntryById,
  updateEntry,
  deleteEntry,
};
