const express = require("express");
const mongoose = require("mongoose");
const { json } = require("body-parser");

const app = express();
const dbName = "intro-to-mongodb";
const Todo = require("./schemas/todo");

app.use(json());

app.get("/todo/:id", async (req, res) => {
  const todoId = req.params.id;
  const todo = await Todo.findById(todoId);

  res.status(200).json(todo);
});

app.get("/todos", async (req, res) => {
  const todos = await Todo.find({});

  res.status(200).json(todos);
});

app.post("/todo", async (req, res) => {
  const todoToCreate = req.body.todo;
  const todo = await Todo.create(todoToCreate);

  res.status(201).json(todo.toJSON());
});

mongoose
  .connect(`mongodb://localhost:27017/${dbName}`, {
    useNewUrlParser: true,
    useCreateIndex: true
  })
  .then(() =>
    app.listen(3000, () => {
      console.log("server on http://localhost:3000");
    })
  )
  .catch(e => console.error(e));
