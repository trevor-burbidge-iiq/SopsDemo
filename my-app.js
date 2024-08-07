
const secrets = require('./secrets.json');

//connect to sql
const sql = require('mssql');
sql.connect({ password: secrets.password })