const express = require("express");
const expensesDataRouter = express.Router();
const expensesModel = require("../models/expense-modal");

const isAuth = require("../middleware/middleware");

// POST master

expensesDataRouter.post("/expenses", isAuth, async (req, res) => {
  console.log(req.body);
  let expenses = new expensesModel(req.body);

  expenses
    .save()
    .then((update) => {
      res.status(201).send({ message: "Created Successfully", data: update });
    })
    .catch((e) => {
      res.status(500).send({ message: "Creation Failed", error: e });
    });
});

// GET

expensesDataRouter.get("/expenses/:whoAdded", isAuth, async (req, res) => {
  let name = req.params.whoAdded;

  console.log("name", name);

  let data = await expensesModel.find({ whoAdded: name });
  res.send({ data: data });
});

expensesDataRouter.post("/expenses/custom", isAuth, async (req, res) => {
  
  let data = await expensesModel.find({
    amount: req.body.amount,
    category: req.body.category,
    whoAdded: req.body.whoAdded,
    whatAdded: req.body.whatAdded
  });
  res.send({ data: data });
});

module.exports = expensesDataRouter;
