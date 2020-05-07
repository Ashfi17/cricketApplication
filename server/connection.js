const pg = require("pg-promise")();
const db = pg("postgres://postgres:root@localhost/bitkraft_cricket");

module.exports = db;
