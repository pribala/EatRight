import axios from "axios";
const APP_ID = "e7e216b0";
const APP_KEY = "0b5ad1a1dcce889c9ea6a9df1e16a318";
const queryUrlBase = `https://api.edamam.com/search?app_id=${APP_ID}&app_key=${APP_KEY}+&q=+`;

export default {
  login: function(creds) {
    return axios.post('/api/users/login', creds)
  },
  loginCheck: function() {
    return axios.get('/api/users/login')
  },
  logout: function() {
    return axios.get('/api/users/logout')
  },
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
  },
  getComments: function(id) {
    return axios.get("/api/saved/comments/" + id);
  },
  deleteComment: function(id) {
    return axios.delete("/api/saved/comments/" + id);
  },
  saveComments: function(commentData) {
    return axios.post("/api/saved/comments", commentData);
  }

};
