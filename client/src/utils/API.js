import axios from "axios";

// const APIKEY = 'VazbN5lpcW0LjX7VjLNR39YQsDDuZlNb';

//const queryUrlBase = "https://api.edamam.com/search?q=+'&q='+&app_id=eb32a015&app_key=1072993812b32bf5d3d2e6d1754f3336" ;
const APP_ID = "e7e216b0";
const APP_KEY = "0b5ad1a1dcce889c9ea6a9df1e16a318";
const queryUrlBase = `https://api.edamam.com/search?app_id=${APP_ID}&app_key=${APP_KEY}+&q=+`;
const config = {
  headers: {'Access-Control-Allow-Origin': '*'}
};
// let getComments= function() {
//   return axios.get("/");
// }
// let deleteComment= function(id) {
//   return axios.delete("/" + id);
// }
// let saveComment= function(commentData) {
//   return axios.post("/", commentData);
// }
export default {
  recipeSearch: function(queryTerms) {
    return axios.get(`${queryUrlBase}${queryTerms}`);
  },
  getSavedRecipes: function() {
    return axios.get("/api/saved/");
  },
  deleteRecipes: function(id) {
    return axios.delete("/api/saved/" + id);
  },
  saveRecipes: function(recipeData) {
    return axios.post("/api/saved", recipeData);
<<<<<<< HEAD
=======
  },
  getComments: function(id) {
    return axios.get("/api/saved/comments/" + id);
  },
  // Gets the book with the given id
  
  // Deletes the book with the given id
  deleteComment: function(id) {
    return axios.delete("/api/saved/comments/" + id);
  },
  saveComments: function(commentData) {
    return axios.post("/api/saved/comments", commentData);
>>>>>>> f24a7bd8e53b0a0b6507a6dc7010f0c24d08d90b
  }

};
