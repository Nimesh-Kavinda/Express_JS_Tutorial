const express = require('express');
const app = express();

// Middelware

app.use(express.json());

let books = [
  {
    id: 1,
    title: 'Book 01',
  },
  {
    id: 2,
    title: 'Book 02',
  },
];

// Get all books

app.get('/', (req, res) => {
  res.json({
    message: 'Welcome to our Book API',
  });
});

// get all books

app.get('/get', (req, res) => {
  res.json(books);
});

// get a single book

app.get('/get/:id', (req, res) => {
  const book = books.find((item) => item.id === parseInt(req.params.id));
  if (!book)
    return res
      .status(404)
      .json({ message: 'Book not found please try with a different Book ID' });
  res.status(200).json(book);
});

// add a new Book

app.post('/add', (req, res) => {
  const newbook = {
    id: books.length + 1,
    title: `Book ${books.length + 1}`,
  };
  books.push(newbook);
  res.status(200).json({
    data: newbook,
    message: 'New book is added Successfully',
  });
});

// update a book

app.put('/update/:id', (req, res) => {
  const findCurrentbook = books.find(
    (bookItem) => bookItem.id === parseInt(req.params.id)
  );

  if (findCurrentbook) {
    findCurrentbook.title = req.body.title || findCurrentbook.title;
    res.status(200).json({
      message: `Book with ${req.params.id} updated successfully`,
      data: findCurrentbook,
    });
  } else {
    res.status(404).json({
      message: 'Book not found please try with a different Book ID',
    });
  }
});

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
