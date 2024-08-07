
const secrets = require('./secrets.json');

//connect to sql
const sql = require('mssql');
sql.connect({ password: secrets.password })

// call api
const axios = require('axios');
const options = {
  method: 'GET',
  url: 'https://api.nasa.gov/planetary/apod',
  params: {
    api_key: secrets.nasaApiKey
  }
};