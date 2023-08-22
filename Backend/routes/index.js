const express = require("express");
const router = express.Router();
const item = require("./item.routes");
const customer = require("./customer.routes");

router.use("/api/customer", customer);

module.exports = router;