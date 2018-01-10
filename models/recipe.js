const mongoose = require("mongoose");
// Save a reference to the Schema constructor
const Schema = mongoose.Schema;

// Using the Schema constructor, create a new RecipeSchema object
const recipeSchema = new Schema({
  // `title` is required and of type String
  recipeTitle: {
    type: String,
    required: true,
   unique: true
  },
  // `link` is required and of type String
  recipeLink: {
    type: String,
    required: true
  },
  // `imgSrc` is of type String
  recipeImage: {
    type: String,
    required: false,
    default: "https://cdn.pinchofyum.com/wp-content/uploads/Top25Recipes-01.png" 
  },
  healthlabels: {
    type: String,
    required: false
  },
 dietlabels: {
    type: String,
    required: false
  },
calories: {
    type: Number,
    required: false
  },
  // `datePosted` is not required and of type Date
  date: { 
    type: Date,
    required: false,
    default: Date.now  
  }
  // `comment` is an object that stores a comment id
  // The ref property links the ObjectId to the Comment model
  // This allows us to populate the Recipe with an associated Comment
  // comment: [{
  //   type: Schema.Types.ObjectId,
  //   ref: "Comment"
  // }]
});

// This creates our model from the above schema, using mongoose's model method
const Recipes = mongoose.model("Recipes", recipeSchema);
// Export the Recipe model
module.exports = Recipes;