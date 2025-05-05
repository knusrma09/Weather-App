const fs = require('fs');

const loadNotes = () => {
    try {
        return JSON.parse(fs.readFileSync('notes.json'));
    } catch (e) {
        return [];
    }
};

const saveNotes = (notes) => {
    fs.writeFileSync('notes.json', JSON.stringify(notes));
};

const addNote = (title, body) => {
    const notes = loadNotes();
    const duplicate = notes.find(note => note.title === title);

    if (!duplicate) {
        notes.push({ title, body });
        saveNotes(notes);
        console.log('Note added!');
    } else {
        console.log('Note title taken!');
    }
};

const removeNote = (title) => {
    const notes = loadNotes();
    const filtered = notes.filter(note => note.title !== title);

    if (notes.length > filtered.length) {
        saveNotes(filtered);
        console.log('Note removed!');
    } else {
        console.log('No note found!');
    }
};

const listNotes = () => {
    const notes = loadNotes();
    console.log('Your Notes:');
    notes.forEach(note => console.log(`- ${note.title}`));
};

const readNote = (title) => {
    const notes = loadNotes();
    const note = notes.find(note => note.title === title);

    if (note) {
        console.log(`Title: ${note.title}\nBody: ${note.body}`);
    } else {
        console.log('Note not found!');
    }
};

module.exports = { addNote, removeNote, listNotes, readNote };
