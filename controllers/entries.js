const entryModel = require("../models/entry");

const createEntry = async (req, res) => {
  const { date, time, text, category } = req.body;
  try {
    const entry = await entryModel.createEntry(date, time, text, category);
    res.status(201).json(entry);
  } catch (err) {
    res.status(500).json({ error: "Failed to create entry" });
  }
};

const getAllEntries = async (req, res) => {
  try {
    const entries = await entryModel.getAllEntries();
    res.status(200).json(entries);
  } catch (err) {
    res.status(500).json({ error: "Failed to retrieve entries" });
  }
};

const getEntryById = async (req, res) => {
  const { id } = req.params;
  try {
    const entry = await entryModel.getEntryById(id);
    res.status(200).json(entry);
  } catch (err) {
    res.status(500).json({ error: "Failed to retrieve entry" });
  }
};

const updateEntry = async (req, res) => {
  const { id } = req.params;
  const { text } = req.body;
  try {
    const entry = await entryModel.updateEntry(id, text);
    res.status(200).json(entry);
  } catch (err) {
    res.status(500).json({ error: "Failed to update entry" });
  }
};

const deleteEntry = async (req, res) => {
  const { id } = req.params;
  try {
    await entryModel.deleteEntry(id);
    res.status(204).send();
  } catch (err) {
    res.status(500).json({ error: "Failed to delete entry" });
  }
};

module.exports = {
  createEntry,
  getAllEntries,
  getEntryById,
  updateEntry,
  deleteEntry,
};
