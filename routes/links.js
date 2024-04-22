const express = require("express");
const router = express.Router();

router.get("/links/:id", (req, res) => {
  console.log(req);
  const { id } = req.params;
  res.render("links", { title: 1, message: 2 });
});

module.exports = router;
