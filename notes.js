console.log('Starting notes.js')

const fs = require('fs')
const _ = require('lodash')

const fetchNotes = () => {
    try {
        const notesString = fs.readFileSync('notes-data.json');
        return JSON.parse(notesString);
    }
    catch (e) {
        return [];
    }
}

const saveNotes = (notes) => {
    fs.writeFileSync('notes-data.json', JSON.stringify(notes))
}


const addNote = (title, body) => {
    const note = {
        title,
        body
    }

    const notes = fetchNotes();
    const duplicateNotes = notes.filter(note => note.title === title)
    if (duplicateNotes.length === 0) {
        notes.push(note)
        saveNotes(notes)
        return note
    }
}

const getAll = () => {
    return fetchNotes()
}

const getNote = (title) => {
    const notes = fetchNotes()
    return notes.find(note => note.title === title) || {}
}

const removeNote = (title) => {
    const notes = fetchNotes()
    _.remove(notes, note => note.title === title)
    saveNotes(notes)
    return notes
}

module.exports = {
    addNote,
    getAll,
    getNote,
    removeNote
}

