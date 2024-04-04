const { Entity, Schema } = require('redis-om');
const client =  require('./client.js');

/* our entity */
class Book extends Entity { }

/* create a Schema for Book */
const bookSchema = new Schema(Book, {
    title: { type: 'string' },
    author: { type: 'string' },
    genre: { type: 'string[]' },
    synopsis: { type: 'text' },
    price: { type: 'number' },
    publishDate: { type: 'date' },
    dateAdded: { type: 'date' }
});

export const bookRepository = new Repository(bookSchema, client);

/* create the index for Person */
await bookRepository.createIndex();