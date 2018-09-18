jest.mock('./notes')
const notes = require('./notes')

describe('notes.js', () => {
    beforeEach(() => {
        myNotes = [
            {title : 'test', body: 'test body'},
            {title : 'test2', body: 'test body2'}
        ]

        notes.getAll = jest.fn().mockImplementation(() => myNotes)
    })

    it('should list all notes', () => {
        const foundNotes = notes.getAll();
        expect(foundNotes).toBe(myNotes)
    })
})