const mongoose = require('mongoose'),
 Schema = mongoose.Schema,
passportLocalMongoose = require('passport-local-mongoose');

const User = new Schema({
//   userName: String,
//   password: String
});

User.plugin(passportLocalMongoose);

module.exports = mongoose.model('User', User);