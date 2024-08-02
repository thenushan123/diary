const express = require("express");
const entryController = require("../controllers/entries");
const router = express.Router();

router.post("/entries", entryController.createEntry);
router.get("/entries", entryController.getAllEntries);
router.get("/entries/:id", entryController.getEntryById);
router.put("/entries/:id", entryController.updateEntry);
router.delete("/entries/:id", entryController.deleteEntry);

module.exports = router;
