const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const db = require("./connection");

const app = express();

app.use(cors());
app.use(bodyParser.json());
app.use(
  bodyParser.urlencoded({
    extended: false,
  })
);

//checking database connection
db.connect()
  .then((res) => {
    console.log("connection established succesfully");
  })
  .catch((err) => {
    console.log("not connected");
  });

const port = process.env.port || 5000;
if (process.env.NODE_ENV !== "test")
  app.listen(port, () => console.log(`Server is listening on port ${port}`));

module.exports = app;
