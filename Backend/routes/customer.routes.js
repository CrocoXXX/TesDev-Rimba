const express = require("express");
const router = express.Router();
const Controller = require("../controllers/customer.controller");
const fileMulterKTP = require('../middleware/multerKTPFile')

router.get("/", Controller.getCustomer);
router.post("/", fileMulterKTP.single('ktp'), Controller.createCustomer);
router.get("/:id/edit", Controller.editCustomer);
router.put("/:id/update", fileMulterKTP.single('ktp'), Controller.updateCustomer);
router.delete("/:id", Controller.deleteCustomer);

module.exports = router;