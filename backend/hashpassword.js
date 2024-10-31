const bcrypt = require('bcrypt');
const password = 'Hope';
const saltRounds = 10;

bcrypt.hash(password, saltRounds, (err, hash) => {
  if (err) {
    console.error(err);
  } else {
    console.log(hash);
  }
});