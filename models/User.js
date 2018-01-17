var mongoose = require('mongoose'),
    Schema = mongoose.Schema,
    passportLocalMongoose = require('passport-local-mongoose');

var userSchema = new Schema({
    username: String,
    password: String
});

userSchema.plugin(passportLocalMongoose);
// This creates our model from the above schema, using mongoose's model method
const Users = mongoose.model("User", userSchema);
// Export the Recipe model
module.exports = Users;
