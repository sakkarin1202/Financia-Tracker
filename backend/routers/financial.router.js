const financialController = require("../controllers/financial.controller");
const express = require("express");
const router = express.Router();

router.post("/",financialController.create);
router.get("/", financialController.findAll);
router.get("/user/:userId", financialController.findAllByUserId);
router.put("/:id", financialController.update);
router.delete("/:id", financialController.delete);

module.exports = router