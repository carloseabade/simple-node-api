const express = require('express');
const app = express();
const PORT = 8080;

app.use(express.json())

app.get('/hello', (req, res) => {
  res.status(200).send({
    response: 'world'
  })
});

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});