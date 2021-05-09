const express = require('express');
const path = require('path');

const app = express();
const PORT = 3200;

const SERVICE_PROVIDER = process.env.SERVICE_PROVIDER || 'firebase';
console.log(SERVICE_PROVIDER);

app.get('/js/:fileName', (req, res) => {
  //res.send("Hello world!");
  res.sendFile(
    path.join(__dirname, `/FE/${SERVICE_PROVIDER}/js/${req.params.fileName}`)
  );
});

app.get('/', (req, res) => {
  //res.send("Hello world!");
  res.sendFile(path.join(__dirname, `/FE/${SERVICE_PROVIDER}/index.html`));
});

app.listen(3200, () => {
  console.log(`Server is listening on port ${PORT}`);
});
