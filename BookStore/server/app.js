import express from 'express';

// Set up the express app
const app = express();

app.get('/api/books', (req, res) => {
  res.status(200).send({
    success: 'true',
    message: 'todos retrieved successfully'
  });
});
const PORT = 4300;

app.listen(PORT, () => {
  console.log(`server running on port ${PORT}`);
});
