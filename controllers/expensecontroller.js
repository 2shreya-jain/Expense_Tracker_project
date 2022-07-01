const Expense = require("../models/expensemodels");

// Controller to get records from DB
const getExpenses = async (req, res) => {
  try {
        const MongoRes = await Expense.find({});

      return res.status(200).json({
        message: "Data",
        data:MongoRes
      });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};


const addExpenses = async (req, res) => {
  try {
        const expense = req.body;
    const MongoRes = await Expense.create(expense);

      return res.status(200).json({
        message: "Data",
        data:MongoRes
      });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};




const updateExpense = async (req, res) => {
    try {
      const { id,expenseName, amount } = req.body;
      if (!id) {
        return res.status(404).json({
          message: `Please enter${!id && " id"} parameter!`,
        });
      }
      // NULL VALIDATION
      if (!id || !expenseName || !amount) {
        return res.status(404).json({
          message: `Please enter ${!id && " id, "} ${!expenseName && " Name ,"}${!amount && " amount"} fields!`,
        });
      }
      // UPDATE THE RECORD
      const updatedData = await Expense.findByIdAndUpdate(id, { expenseName, amount });
      res.json({ message: " Updated!" });
    } catch (error) {
      res.status(404).json({ message: error.message });
    }
  };


// Controller to delete records from DB
const deleteExpense = async (req, res) => {
    try {
      const {id} = req.body;
      if (!id) {
        return res.status(404).json({
          message: `Please enter valid${!id && " id"} parameter!`,
        });
      }
      // FIND IF THE RECORDS EXISTS
      const id1 = await Expense.findById({ _id: id });
      if (!id1) {
        return res.status(404).json({
          message: "No such data found!",
        });
      }
  
      // DELETE THE EXPENSE BASED IN 'id'
      const deleteexpense = await Expense.findByIdAndRemove(id);
      return res.json({ message: "Data Deleted!" });
    } catch (error) {
      return res.status(404).json({ message: error.message });
    }
  };
  



module.exports = {
  getExpenses,
  addExpenses,
  updateExpense,
  deleteExpense
};
