const User = require("../models/userModels");
const bcrypt = require("bcrypt");
//Do we need bcrypt here?

const createUser = (req, res) => {
  const { username, password } = req.body;
  // create user takes in the username and password and saves a user.
  // our pre save hook should kick in here saving this user to the DB with an encrypted password.
  User.create({ username, password })
    .then(newUser => res.status(201).send(newUser))
    .catch(err => res.status(500).send(err));
};

module.exports = {
  createUser
};
