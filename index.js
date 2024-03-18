#!/usr/bin/env node
console.log('hello');

const note = process.argv[2]
const newNote = {
    content: note,
    id: Date.now()
}
console.log(newNote);