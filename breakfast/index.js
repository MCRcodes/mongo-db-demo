const express = require("express");
const mongoose = require("mongoose");
const { json } = require("body-parser");

const app = express();
const dbName = "get-me-breakfast";
const Breakfast = require("./breakfast-schema");

app.use(json());

app.post("/breakfast", async (req, res) => {
  const breakfastToCook = req.body.breakfast;
  const breakfast = await Breakfast.create(breakfastToCook).catch(e =>
    res.status(422).json(e.toJSON())
  );

  res.status(201).json(breakfast.toJSON());
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
