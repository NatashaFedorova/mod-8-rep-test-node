const express = require('express');

const app = express();

app.use('*', (req, res) => {
  console.log('Був запит від браузера');
  res.send('<h1>Це HTML тобі у відповідь</h1>');
});

const listener = app.listen(4444, () => {
  console.log(`Був запит від браузера ${listener.address().port}`);
});
