const fs = require('fs');
const _ = require('lodash'); // set of really handy utilities
const yargs = require('yargs');

const notes = require('./notes.js');

const argv = yargs.argv;
var command = process.argv[2];
console.log('Command: ', command);
console.log('Process', process.argv);
console.log('Yargv', argv);
console.log(process.argv);

if (command === 'add') {
  notes.addNote(argv.title, argv.body);
} else if (command === 'list') {
  notes.getAll();
} else if (command === 'read') {
  notes.getNote(argv.title);
}else if (command === 'remove') {
  notes.removeNote(argv.title);
}else {
  console.log('Command not regonised');
}
