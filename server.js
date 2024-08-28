const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = process.env.PORT || 5000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.get('/api/customers', (req, res) =>  {
    res.send([
        {
          'id': '1',
          'name': '장원',
          'birthday': '971008',
          'gender': '남자',
          'job': '대학생'
        },
        {
          'id': '2',
          'name': '장종대',
          'birthday': '570402',
          'gender': '남자',
          'job': '백수'
        },
        {
          'id': '3',
          'name': '최미경',
          'birthday': '640103',
          'gender': '여자',
          'job': '주부'
        }
      ]);
});

app.listen(port, () => console.log(`Listening on port ${port}`));