const express = require('express');
const app = express();
const port = process.env.PORT || 8000;

app.use(express.static(`${__dirname}/views/`));

app.get('/', function (req, res) {
  res.sendFile('index.html');
});

app.listen(port, function () {
  console.log(`server connected on port: ${port}`);
});
