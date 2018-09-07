const request = require('request');
const yargs = require('yargs');

const argv = yargs
  .options({
    a: {
      demand: true,
      aloas: 'address',
      describe: 'Address to fetch weather for',
      string: true
    }
  })
  .help()
  .alias('help', 'h')
  .argv;

  console.log(argv.a);
  console.log(encodeURIComponent(argv.a));

  const address = encodeURIComponent(argv.a);

request({
  url: `https://maps.googleapis.com/maps/api/geocode/json?address=${address}`,
  json: true
}, (error, response, body) => {
  // console.log(JSON.stringify(body, undefined, 2));
  console.log(`Address:${body.results[0].formatted_address}`);
  console.log(`Lat:${body.results[0].geometry.location.lat}`);
  console.log(`Lat:${body.results[0].geometry.location.lng}`);
})
