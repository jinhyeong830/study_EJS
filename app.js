/** @format */
/* 사용할 모듈 불러오고 express모듈에 연결*/
const ejs = require('ejs');
const express = require('express');
const app = express();
const PORT = 3000;

/*  */
app.set('view engine', 'ejs');
app.set('views', __dirname + '/views');

/* routing!!! */
//루트 페이지로 제일 먼저 들어가면 test.ejs를 보여준다는 의미
app.get('/', (req, res) => {
  res.render('test');
  console.log('test text');
});

app.get('/about', (req, res) => {
  res.render('about', { name: req.query.nameQuery });
  // 두번째 인자는 ejs에서 사용될 object를 선언해준 것
  console.log(req.query);
  console.log(req.query.name);
});

app.get('/about/:nameParam', (req, res) => {
  res.render('about', { name: req.params.nameParam });
});

/* 포트열어서 서버연결 */
app.listen(PORT, function () {
  console.log(`Hi! PORT ${PORT} SERVER is opened! \n http://localhost:3000`);
});

app.use('/static', express.static('static'));
//사진을 볼 수 있게 해줌
