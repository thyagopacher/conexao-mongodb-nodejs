var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', async (req, res) => {
  const db = require("../db");
  const Users = db.Mongoose.model('users', db.UserSchema, 'users');

  const docs = await Users.find({}).lean().exec();
  res.render('index', { docs });
});

/* GET New User page. */
router.get('/user', (req, res) => {
  res.render('user', { title: 'Cadastro de Usuário' });
});

/* POST new user */
router.post('/user', async (req, res) => {
  console.log(req.body);
  const username = req.body.username;
  const email = req.body.email;

  const db = require("../db");
  const Users = db.Mongoose.model('users', db.UserSchema, 'users');
  const user = new Users({ username, email });

  try {
    await user.save();
    res.redirect("/");
  } catch (err) {
    next(err);
  }
});

module.exports = router;
