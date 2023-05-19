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
    // to be replaced with internal cluster communication using the service name and service port
    const apiRes = await axios.get(`http://localhost/service${service}`);
    res.json({ msg: `Service ${apiRes.data.msg}` });
  } catch (err) {
    res.status(500).json({ msg: "Server Error..." });
  }
});

app.listen(4000, () => {
  console.log("Server listening on port 4000");
});
