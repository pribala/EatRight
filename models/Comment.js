const mongoose = require("mongoose");

// Save a reference to the Schema constructor
const Schema = mongoose.Schema;

// Using the Schema constructor, create a new CommentSchema object
const CommentSchema = new Schema({
  // `title` is of type String

  commentAuthor:{
    type: String,
    required: true,
    unique: true
  },
  commentDate:{
    type: Date,
    required: false,
    default: Date.now 
  },
  commentBody:{
    type: String,
<<<<<<< HEAD
    required: false,
    default: Date.now 
=======
  	required: false,
>>>>>>> 70740c726ef00b9344b7d7883736a944f8fb4b53
  },
  rating:{
    type: String,
    required: false,
  },
  recipeUrl:{
    type: String,
  	required: false
  }

});

// This creates our model from the above schema, using mongoose's model method
const Comments = mongoose.model("Comment", CommentSchema);

// Export the Comment model
module.exports = Comments;