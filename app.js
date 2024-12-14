const express = require('express');
const app = express();
const PORT = 3000;

app.get('/', (req, res) => {
  res.send('Hello from Docker and GIT  - works (bash) - again & again!!!');
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
