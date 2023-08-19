const express = require("express");
const router = express.Router();
const Controller = require("../controllers/item.controller");
const fileMulter = require('../middleware/multerFile')

router.get("/", Controller.getItem);
// router.post("/", Controller.createItem);
router.post("/file", fileMulter.single('barang') ,Controller.createItemPhoto);
router.get("/:id/edit", Controller.editItem);
router.put("/:id/update", fileMulter.single('barang'), Controller.updateItem);
router.delete("/:id", Controller.deleteItem);
// router.get("/:id", Controller.getProductById);

module.exports = router;