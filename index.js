const express = require('express');
const app = express();

// use the express-static middleware
app.use(express.static('public'));

app.get('/', (req, res) => {
  res.render('index.html');
});

app.get('*', (req, res) => {
  res.status(404).send('<h1>Page not found</h1>');
});

app.listen(process.env.PORT || 3000, () => {
  console.log('Natours server is running...');
});