const path = require("path");
const express = require("express");
const cors = require("cors");

const app = express();

app.use("/public", express.static(path.join(__dirname, "public")));
app.use(cors());

// app.use("/api/v1");
const BASE_URL = "/api/v1";

app.use(BASE_URL, require("./routes/upload"));

app.get("/hello", (req, res) => {
  res.json("hello");
});

app.listen(8080, () => {
  console.log("boot success");
});
