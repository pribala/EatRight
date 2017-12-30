const mongoose = require("mongoose");

// Save a reference to the Schema constructor
const Schema = mongoose.Schema;

// Using the Schema constructor, create a new CommentSchema object
const CommentSchema = new Schema({
  // `title` is of type String
  { commentTitle: String, required: true },
  // `author` is of type String
  { commentAuthor: String, required: true },
  // `body` is of type String
  { commentBody: String, required: true },
  // `commentDate` is of type date
  { commentDate: Date, required: false, default: Date.now }
});

// This creates our model from the above schema, using mongoose's model method
const Comment = mongoose.model("Comment", CommentSchema);

// Export the Comment model
module.exports = Comment;
