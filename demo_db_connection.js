var mysql = require('mysql');

var con = mysql.createConnection({
  host: "localhost",
  user: "mvnitro",
  password: "socram123"
});

con.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
});
