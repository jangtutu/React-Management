const fs = require('fs');
const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = process.env.PORT || 5000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

const data = fs.readFileSync('./database.json');
const conf = JSON.parse(data);
const mysql = require('mysql');

const connection = mysql.createConnection({
  host: conf.host,
  user: conf.user,
  password: conf.password,
  port: conf.port,
  database: conf.database
});
connection.connect();

<<<<<<< HEAD
const multer = require('multer');
const upload = multer({dest: './upload'})

=======
>>>>>>> 6a88dc9710f48ba20f8c898654be19514131c3a7
app.get('/api/customers', (req, res) =>  {
    connection.query(
      "SELECT * FROM CUSTOMER",
      (err, rows, fields) => {
        res.send(rows);
      } 
    );
<<<<<<< HEAD
});

app.use('/image', express.static('./upload'));

app.post('/api/customers', upload.single('image'),(req, res) => {
  let sql = 'INSERT INTO CUSTOMER VALUES (null, ?, ?, ?, ?, ?)';
  let image = '/image/' + req.file.filename;
  let name = req.body.name;
  let birthday = req.body.birthday;
  let gender = req.body.gender;
  let job = req.body.job;
  console.log(name);
  console.log(image);
  console.log(birthday);
  console.log(gender);
  console.log(job);
  let param = [image, name, birthday, gender, job]
  connection.query(sql, params,
    (err, rows, fields) => {
      res.send(rows);
    });
=======
>>>>>>> 6a88dc9710f48ba20f8c898654be19514131c3a7
});

app.listen(port, () => console.log(`Listening on port ${port}`));