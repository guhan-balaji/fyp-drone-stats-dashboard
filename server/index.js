const express = require("express");
const cors = require("cors");
const app = express();

let message = {};

app.use(express.json());
app.use(cors());

app.get("/", cors(), (_, res) => {
  console.log(message);
  res.json(message);
});
app.post("/", (req, res) => {
  message = req.body;
  res.send("received");
});

app.listen(8080);
