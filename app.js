const fs = require('fs')
const yargs = require('yargs')

const notes = require('./notes')

const titleOptions = {
    describe: 'Title of note',
    demand: true,
    alias: 't'
};

const bodyOptions = {
    describe: 'Body of note',
    demand: true,
    alias: 'b'
};
const argv = yargs
.command('add', 'Add a new note', {
    title: titleOptions,
    body: bodyOptions
})
.command('list', 'List of all notes')
.command('read', 'Read a note', {
    title: titleOptions
})
.command('remove', 'Remove a note', {
    title: titleOptions
})
.help().argv
const command = argv._[0]

switch (command) {
    case 'add':
        const note = notes.addNote(argv.title, argv.body)
        note ? notes.logNote(note) : console.log(`${argv.title} already exists`)
        break
    case 'list':
        const allNotes = notes.getAll()
        console.log(`Printing ${allNotes.length} note(s)`)
        allNotes.forEach(note => notes.logNote(note))
        break
    case 'read': 
        const foundNote = notes.getNote(argv.title)
        foundNote ? notes.logNote(foundNote)  : 'Note not found'
        break
    case 'remove':
        const noteRemoved = notes.removeNote(argv.title)
        const msg = noteRemoved ? 'Note was removed' : 'Note not found' 
        console.log(msg)
        break
    default: console.log('command not recognized'); break
}