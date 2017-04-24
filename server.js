const express = require('express');
const path = require('path');

const app = express();
const port  = process.env.PORT || 8080;

app.use(express.static(path.join(__dirname, '/app')));

app.get('/', (request, response) => {
  response.render('/app/index.html');
});

app.listen(port, () => {
  console.log('App has started');
});
