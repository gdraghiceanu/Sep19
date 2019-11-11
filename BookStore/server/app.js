import express from 'express';
const fs = require('fs');
const bodyParser = require('body-parser');

// Set up the express app
const app = express();
const PORT = 4300;

app.use(function (req, res, next) {
  res.header('Access-Control-Allow-Origin', '*');
  res.header(
    'Access-Control-Allow-Headers',
    'Origin, X-Requested-With, Content-Type, Accept'
  );
  next();
});

app.use(bodyParser.json());

app.get('/api/books', (req, res) => {
  const dataString = fs.readFileSync('./database.json', 'utf8');
  const data = JSON.parse(dataString);

  res.status(200).send(data.books);
});

app.get('/api/book/:id', (req, res) => {
  const dataString = fs.readFileSync('./database.json', 'utf8');
  const data = JSON.parse(dataString);

  const book = data.books.find(b => b.id == req.params.id);
  if (book) {
    res.status(200).send(book);
  } else {
    res.status(404).send();
  }
});

app.get('/api/notebooks', (req, res) => {
  const dataString = fs.readFileSync('./database.json', 'utf8');
  const data = JSON.parse(dataString);

  res.status(200).send(data.notebooks);
});

app.get('/api/notebook/:id', (req, res) => {
  const dataString = fs.readFileSync('./database.json', 'utf8');
  const data = JSON.parse(dataString);
  const notebook = data.notebooks.find(n => n.id == req.params.id);

  if (notebook) {
    res.status(200).send(notebook);
  } else {
    res.status(404).send();
  }
});

app.post('/api/book', (req, res) => {
  const dataString = fs.readFileSync('./database.json', 'utf8');
  const data = JSON.parse(dataString);
  const books = data.books;

  const book = req.body;
  const existingBookIndex = books.findIndex(b => b.id === book.id);

  let updatedBook;

  if (existingBookIndex > -1) {
    updatedBook = Object.assign({}, book, { id: books[existingBookIndex].id });
    books[existingBookIndex] = updatedBook;
  } else {
    updatedBook = Object.assign({}, book, { id: Date.now() });
    books.push(updatedBook);
  }

  fs.writeFileSync('./database.json', JSON.stringify(data));

  res.status(200).send(updatedBook);
});

app.post('/api/notebook', (req, res) => {
  const dataString = fs.readFileSync('./database.json', 'utf8');
  const data = JSON.parse(dataString);
  const notebooks = data.notebooks;

  const notebook = req.body;
  const existingNotebookIndex = notebooks.findIndex(n => n.id === notebook.id);

  let updatedNotebook;

  if (existingNotebookIndex > -1) {
    updatedNotebook = Object.assign({}, notebook, {
      id: notebooks[existingNotebookIndex].id
    });
    notebooks[existingNotebookIndex] = updatedNotebook;
  } else {
    updatedNotebook = Object.assign({}, notebook, { id: Date.now() });
    notebooks.push(updatedNotebook);
  }

  fs.writeFileSync('./database.json', JSON.stringify(data));

  res.status(200).send(updatedNotebook);
});

app.listen(PORT, () => {
  console.log(`server running on port ${PORT}`);
});
