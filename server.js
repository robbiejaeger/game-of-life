const express = require('express');
const app = express();
const path = require('path');

app.use(express.static(path.join(__dirname, '/public')));

app.set('port', process.env.PORT || 3000);

app.listen(app.get('port'), () => {
  console.log(`Game of Life running on port ${app.get('port')}`);
});