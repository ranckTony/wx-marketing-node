const mysql2 = require("mysql2/promise");

const dbConfig = require("./db.config");

const sql = mysql2.createPool(dbConfig);

// sql.query("SELECT 1").then((data) => {
//   console.log(data);
// });

module.exports = sql;
