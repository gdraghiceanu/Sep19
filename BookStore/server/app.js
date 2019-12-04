import express from 'express';
const fs = require('fs');
const bodyParser = require('body-parser');

// Set up the express app
const app = express();
const PORT = 4300;

const TOKEN = {
  USER: "1d939a7f-25b6-4b5b-82e5-940c763e275e",
  ADMIN: "1f65d25c-a346-4f08-a90f-be8cb61fb674"
};

app.use(function (req, res, next) {
  res.header('Access-Control-Allow-Origin', '*');
  res.header(
    'Access-Control-Allow-Headers',
    'Origin, X-Requested-With, Content-Type, Accept'
  );
  next();
});

app.use(bodyParser.json());


app.get('/api/login', (req, res) => {
  const username = req.query.username;
  const password = req.query.password;

  if (username === "adminUser" && password === "1234") {
    res.status(200).send(
      {
        token: TOKEN.ADMIN,
        user: {
          id: 1,
          username: "adminUser",
          isAdmin: true,
        }
      }
    );
  }

  if (username === "normalUser" && password === "1234") {
    res.status(200).send(
      {
        token: TOKEN.ADMIN,
        user: {
          id: 2,
          username: "normalUser",
          isAdmin: false,
        }
      }
    );
  }

  res.status(401).send("Not OK");
});

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

app.get('/api/bookNameAvailable', (req, res) => {
  const dataString = fs.readFileSync('./database.json', 'utf8');
  const data = JSON.parse(dataString);

  if (req.query.name) {
    const isNameAvailable = data.books.find(b => b.title.toLowerCase() === req.query.name.toLowerCase());
    res.status(200).send(!isNameAvailable);
  } else {
    res.status(200).send(false);
  }
})

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
  if (req.headers.authorization !== TOKEN.ADMIN) {
    res.status(401).send();
  }

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
  if (req.headers.authorization !== TOKEN.ADMIN) {
    res.status(401).send();
  }

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
