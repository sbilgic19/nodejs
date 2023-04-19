const express = require('express');
const path = require('path');
const ejs = require('ejs');

const app = express();
app.use(express.static('public'));

// TEMPLATE ENGINE
app.set('view engine', 'ejs');

app.get('/', (req, res) => {
  // const blog = { id: 1, title: 'Blog title', description: 'Blog description' };
  // res.send(blog);

  // res.sendFile(path.resolve(__dirname, 'temp/index.html'));
  res.render('index');
});

app.get('/about', (req, res) => {
  // const blog = { id: 1, title: 'Blog title', description: 'Blog description' };
  // res.send(blog);

  // res.sendFile(path.resolve(__dirname, 'temp/index.html'));
  res.render('about');
});

app.get('/add_post', (req, res) => {
  // const blog = { id: 1, title: 'Blog title', description: 'Blog description' };
  // res.send(blog);

  // res.sendFile(path.resolve(__dirname, 'temp/index.html'));
  res.render('add_post');
});

app.get('/post', (req, res) => {
  // const blog = { id: 1, title: 'Blog title', description: 'Blog description' };
  // res.send(blog);

  // res.sendFile(path.resolve(__dirname, 'temp/index.html'));
  res.render('post');
});

const port = 3001;
app.listen(port, () => {
  console.log(`Sunucu ${port} portunda başlatıldı`);
});
