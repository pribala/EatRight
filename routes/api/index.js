const router = require('express').Router();
const recipeRoutes = require('./recipes');
// const commentRoutes = require('./comments');
// Article routes
router.use('/saved', recipeRoutes);
// router.use('/', commentRoutes);

module.exports = router;
