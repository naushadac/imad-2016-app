var express = require('express');
var morgan = require('morgan');
var path = require('path');

var app = express();
app.use(morgan('combined'));

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});

app.get('/ui/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});

app.get('/ui/madi.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'madi.png'));
});

app.get('/ui/instruction.html', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'instruction.html'));
});

app.get('/ui/aptitude.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'aptitude.png'));
});

app.get('/ui/back1.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'back1.png'));
});

app.get('/ui/board.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'board.png'));
});

app.get('/ui/chemistry.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'chemistry.png'));
});

app.get('/ui/continue.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'continue.png'));
});

app.get('/ui/gk.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'gk.png'));
});

var port = 8080; // Use 8080 for local development because you might already have apache running on 80
app.listen(8080, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});
