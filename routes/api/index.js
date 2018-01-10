const router = require('express').Router();
const recipeRoutes = require('./recipes');
// const commentRoutes = require('./comments');
// Article routes
router.use('/saved', recipeRoutes);
module.exports = router;
