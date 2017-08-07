const express = require('express');
const mustacheExpress = require('mustache-express');
const data = require('./data.js');
const app = express();

app.engine('mustache', mustacheExpress());
app.set('views', './views');
app.set('view engine', 'mustache');

app.use('/public', express.static('public'));

app.get('/', function(req, res){
  res.render('profile', data)
});

app.get('/:user', function(req, res) {
  let username = req.params.user;

  for (let i = 0; i < data.users.length; i++) {
    if (data.users[i].username === username ) {
      res.render('singlerobot', data.users[i])
    }
  };
});

app.listen(3000);
