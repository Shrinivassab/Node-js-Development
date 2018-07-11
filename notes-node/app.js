console.log('Starting app.js');

const fs = require('fs');
const os = require('os');
const _ = require('lodash'); // set of really handy utilities
const notes = require('./notes.js');

// console.log(_.isString(true));
// console.log(_.isString('Shrinivass'));

var filteredArray = _.uniq(['Shrinivass',1,1,2,3,4,"Shrinivass"]);
console.log(filteredArray);

var user = os.userInfo();
// console.log(user);

// fs.appendFile('greeting.txt','Hello' + user.username + '!', function (err) {
//   if (err) {
//     console.log('Unable to write to file');
//   }
// });

// fs.appendFile('greeting.txt',`${user.username}`, function (err) {
//   if (err) {
//     console.log('Unable to write to file');
//   }
// });
