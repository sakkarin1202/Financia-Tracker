const express = require("express");
const financialController = require("../controllers/financial.controller");
const router = express.Router();

router.post("/", financialController.create);
router.get("/", financialController.findAll);
router.get("/user/:userId", financialController.findAllByUserId);
router.get("/:id", financialController.getFinancialRecordById);
router.put("/:id", financialController.update);
router.delete("/:id", financialController.delete);


module.exports = router;


