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

app.get('/ui/studsign.html', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'studsign.html'));
});

app.get('/ui/selectsubject1.html', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'selectsubject1.html'));
});

app.get('/ui/sports1.html', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'sports1.html'));
});

app.get('/ui/jsfile.js', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'jsfile.js'));
});

app.get('/ui/testpaper.js', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'testpaper.js'));
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

app.get('/ui/patt4.jpg', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'patt4.jpg'));
});

app.get('/ui/keyboard3.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'keyboard3.png'));
});


app.get('/ui/logo.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'logo.png'));
});

app.get('/ui/maths.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'maths.png'));
});

app.get('/ui/patt3.jpg', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'patt3.jpg'));
});

app.get('/ui/physics.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'physics.png'));
});

app.get('/ui/playvid2.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'playvid2.png'));
});

app.get('/ui/sports.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'sports.png'));
});

app.get('/ui/startimg.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'startimg.png'));
});

app.get('/ui/submit.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'submit.png'));
});






var port = 8080; // Use 8080 for local development because you might already have apache running on 80
app.listen(8080, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});
