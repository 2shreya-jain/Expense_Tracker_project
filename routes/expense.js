const express = require("express");
const {
  getExpenses,
  addExpenses,
  updateExpense,
  deleteExpense
} = require("../controllers/expensecontroller");
const router = express.Router();

router.get("/expenses", getExpenses); // GET Contact URL
router.post("/addExpenses", addExpenses); // GET Contact URL
router.put("/updateExpense", updateExpense); // PUT Contact URL
router.delete("/deleteExpense", deleteExpense); // DELETE Contact URL

module.exports = router;
