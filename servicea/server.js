const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());

app.get("/", (_req, res) => {
  res.json({ msg: "Service A" });
});

app.listen(4001, () => {
  console.log("Server listening on port 4001");
});
