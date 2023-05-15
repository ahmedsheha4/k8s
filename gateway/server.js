const express = require("express");
const cors = require("cors");
const axios = require("axios");
const app = express();

app.use(cors());

app.get("/service/:service", async (req, res) => {
  try {
    const services = ["a", "b"];
    const service = req.params.service?.toLowerCase();
    if (!services.includes(service)) return res.send("invalid service");
    const port = service === "a" ? 4001 : 4002;
    const apiRes = await axios.get(`http://localhost:${port}`);
    res.json({ msg: `Service ${apiRes.data.msg}` });
  } catch (err) {
    res.status(500).json({ msg: "Server Error..." });
  }
});

app.listen(4000, () => {
  console.log("Server listening on port 4000");
});
