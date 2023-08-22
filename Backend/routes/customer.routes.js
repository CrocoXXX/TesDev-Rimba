const express = require("express");
const router = express.Router();
const Controller = require("../controllers/customer.controller");
const fileMulterKTP = require('../middleware/multerKTPFile')

router.get("/", Controller.getCustomer);
router.post("/", fileMulterKTP.single('ktp'), Controller.createCustomer);
// router.post("/file", fileMulter.single('barang') ,Controller.createItemPhoto);
// router.get("/:id/edit", Controller.editItem);
router.put("/:id", Controller.updateCustomer);
router.delete("/:id", Controller.deleteCustomer);

module.exports = router;