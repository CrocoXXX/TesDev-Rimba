const express = require("express");
const router = express.Router();
const Controller = require("../controllers/sales.controller");

router.get("/", Controller.getSales);
router.post("/", Controller.createSales);
router.get("/:id/edit", Controller.editSales);
router.put("/:id/update", Controller.updateSales);
router.delete("/:id", Controller.deleteSales);

module.exports = router;