const path = require("path");
const express = require("express");
const cors = require("cors");
const { getCurrentSystemIp } = require("./utils");
const { APP_PORT } = require("./configs");

const app = express();

app.set("views", "./views");
app.set("view engine", "pug");

app.use("/public", express.static(path.join(__dirname, "public")));
app.use(cors());

// app.use("/api/v1");
const BASE_URL = "/api/v1";

// app.use(BASE_URL, require("./routes/links"));
app.use(BASE_URL, require("./routes/promotion"));

app.use(BASE_URL, require("./routes/upload"));

app.get("/hello", (req, res) => {
  res.json("hello");
});

app.listen(APP_PORT, () => {
  console.log("boot success", getCurrentSystemIp());
});
