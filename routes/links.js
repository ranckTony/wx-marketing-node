const express = require("express");
const router = express.Router();
const sql = require("../db");

router.get("/links/:id", (req, res) => {
  sql
    .query(`select * from hp_links where id = ?`, [req.params.id])
    .then(([data]) => {
      if(data.length) {
        console.log(data);

        const {title, content} = data.at(0)
        res.render("links", { title,  content });

      }

    })
    .catch((err) => {
      console.log(33, err);
    });
});

module.exports = router;
