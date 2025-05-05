const fs = require('fs');
const notes = require('./notes');

const command = process.argv[2];
const title = process.argv[3];
const body = process.argv[4];

if (command === 'add') {
    notes.addNote(title, body);
} else if (command === 'remove') {
    notes.removeNote(title);
} else if (command === 'list') {
    notes.listNotes();
} else if (command === 'read') {
    notes.readNote(title);
} else {
    console.log('Command not recognized.');
}
