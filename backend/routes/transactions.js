const express = require("express");
const router = express.Router();
const {
  getTrasactions,
  addTrasactions,
  deleteTrasactions,
} = require("../controllers/transactionControllers");
router.route("/").get(getTrasactions).post(addTrasactions);
router.route('/:id').delete(deleteTrasactions)

module.exports = router;
