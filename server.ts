import express from 'express'
import { DatabaseSync } from 'node:sqlite'
import { showComment } from './vulnerability-examples/unsafe-comment'
import { searchUsers } from './vulnerability-examples/unsafe-search'
import { readDocument } from './vulnerability-examples/unsafe-file'

const app = express()
const database = new DatabaseSync(':memory:')

database.exec(`
  CREATE TABLE users (id INTEGER PRIMARY KEY, name TEXT NOT NULL);
  INSERT INTO users (name) VALUES ('Ada'), ('Grace');
`)

app.locals.database = {
  all(query: string, callback: (error: Error | null, rows?: unknown) => void) {
    try {
      callback(null, database.prepare(query).all())
    } catch (error) {
      callback(error instanceof Error ? error : new Error('Database query failed'))
    }
  },
}

app.get('/comment', showComment)
app.get('/search', searchUsers)
app.get('/document', readDocument)

app.listen(4317, '127.0.0.1', () => {
  console.log('Sample server listening at http://127.0.0.1:4317')
})
