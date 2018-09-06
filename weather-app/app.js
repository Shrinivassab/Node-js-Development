const request = require('request');

request({
  url: 'https://maps.googleapis.com/maps/api/geocode/json?address=7%20wallingford%20road%20brighton',
  json: true
}, (error, response, body) => {
  // console.log(JSON.stringify(response, undefined, 2));
  console.log(`Address:${body.results[0].formatted_address}`);
  console.log(`Lat:${body.results[0].geometry.location.lat}`);
  console.log(`Lat:${body.results[0].geometry.location.lng}`);
})
