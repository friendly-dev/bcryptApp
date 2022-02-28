const bcrypt = require('bcrypt');

const passwordFromUser = "user_pass"

const salt = bcrypt.genSaltSync(10)

const passwordToSave = bcrypt.hashSync(passwordFromUser, salt)

console.log(salt);
console.log(passwordFromUser);
console.log(passwordToSave);
