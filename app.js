const fs = require('fs')
const _ = require('lodash')
const yargs = require('yargs')

const notes = require('./notes')

const argv = yargs.argv
const command = argv._[0]
console.log('Command: ', command)
console.log('Yargs: ', argv)


switch (command) {
    case 'add':
        const note = notes.addNote(argv.title, argv.body)
        note ? notes.logNote(note) : console.log(`${argv.title} already exists`)
        break
    case 'list':
        const allNotes = notes.getAll()
        console.log(allNotes)
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