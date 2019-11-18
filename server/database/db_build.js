const fs = require("fs");

const dbConnection = require("./db_connection");

const sql = fs.readFileSync(`${__dirname}/db_build.sql`).toString();
const fakeData = fs.readFileSync(`${__dirname}/fakeData.sql`).toString();

const runDbBuild = cb => dbConnection.query(sql, cb);

dbConnection.query(sql, (err, res) => {
  console.log("database is connected successfully");
  dbConnection.query(fakeData, (err2, res2) => {
    console.log("data inserted successfully");
    if (err2) {
      throw err2;
    }
  });
  if (err) {
    throw err;
  }
});

module.exports = runDbBuild;
