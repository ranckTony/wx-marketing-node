const express = require("express");
const router = express.Router();
const sql = require("../db");
const { getCurrentSystemIp } = require("../utils");
const { APP_PORT } = require("../configs");

router.get("/promotions", (req, res) => {
  sql
    .query(`select * from hp_promotions `, [req.params.id])
    .then(([data]) => {
      console.log(data);

      if (Array.isArray(data)) {
        const activeUrl = `${getCurrentSystemIp()}:${APP_PORT}/api/v1/promotion/active`;

        const result = data.map((item) => {
          return {
            ...item,
            activeUrl: `${req.protocol}://${activeUrl}/${item.id}`,
          };
        });

        res.json(result);
      } else {
        res.json([]);
      }
    })
    .catch();
});

router.get("/promotion/:id", (req, res) => {
  sql
    .query(`select * from hp_promotions where id = ?`, [req.params.id])
    .then(([data]) => {
      if (data.length) {
        res.json(data);
      }
    })
    .catch((err) => {
      console.log(33, err);
    });
});

router.get("/promotion/active/:id", (req, res) => {
  sql
    .query(`select * from hp_promotions where id = ?`, [req.params.id])
    .then(([data]) => {
      if (data.length) {
        console.log(data);

        const { name, weixin, bg } = data.at(0);
        res.render("promotion", { name, weixin, bg });
      }
    })
    .catch((err) => {
      console.log(33, err);
    });
});

module.exports = router;
