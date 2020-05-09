const pg = require("pg-promise")();

//*** URL FORMAT : postgres://{YourUserName}:{YourPassword}@{YourHost}:5432/YourDatabase
//change the connection url as per your details in the same format mentioned above
const db = pg("postgres://postgres:root@localhost/bitkraft_cricket");

module.exports = db;
