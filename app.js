console.log('Starting app.js')

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
        const msg = note ? `Note added : ${note.title} - ${note.body}` : `${argv.title} already exists`
        console.log(msg)
        break
    case 'list':
        notes.getAll()
        break
    case 'read': 
        notes.getNote(argv.title)
        break
    case 'remove':
        notes.removeNote(argv.title)
        break
    default: console.log('command not recognized'); break
}