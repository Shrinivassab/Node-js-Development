const request = require('request');

request({
  url: 'https://maps.googleapis.com/maps/api/geocode/json?address=7%20wallingford%20road%20brighton',
  json: true
}, (error, response, body) => {
  console.log(body);
})
