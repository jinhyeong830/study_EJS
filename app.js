/** @format */

let express = require('express');
let app = express();
app.listen(3000, function () {
  console.log('server start on port 3000');
});

app.set('view engine', 'ejs');

app.get('/', (req, res) => {
  res.render('./views/main');
});
