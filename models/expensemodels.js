const mongoose = require("mongoose");

const expensesSchema = mongoose.Schema(
  {
    expenseName: {
      type: String,
      required: true,
      uppercase: true,
    },
    amount: {
      type: Number,
      required: true,
    },
    comments:{
        type:String,
        required:false,
    }
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Expenses", expensesSchema);
