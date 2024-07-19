const express = require("express");
const mongoose = require("mongoose");
const productRoute = require("./routes/productRoute");
require("dotenv").config();

const app = express();
const PORT = process.env.PORT || 3000;
const MONGO_DB_URI_KEY = process.env.MONGO_DB_URI_KEY;

app.use(express.json());
app.use(express.urlencoded({ extended: false }));


app.use("/api/products", productRoute);
///routes
app.get("/", (req, res) => {
  throw new Error("fake error")
  // res.send("hello from the other side");
});

mongoose
  .connect(process.env.MONGO_DB_URI_KEY)
  .then(() => {
    console.log("connected to MongoDB");
    app.listen(PORT, () => {
      console.log("NODE api is running on port 3000");
    });
  })
  .catch((error) => {
    console.log(error);
  });
