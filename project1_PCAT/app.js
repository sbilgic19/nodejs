const express = require('express');
const path = require('path');

const app = express();

// app.get('/', (req, res) => {
//   const photo = {
//     id: 1,
//     name: 'Photo Name',
//     description: 'Photo Description',
//   };
//   res.send(photo);
// });

const port = 3000;
app.listen(port, () => {
  console.log(`Sunucu ${port} portunda başlatıldı.`);
});
