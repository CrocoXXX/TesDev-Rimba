const express = require("express");
const router = express.Router();
const item = require("./item.routes");

router.use("/api/item", item);

module.exports = router;