const router = require('express').Router();
const recipeRoutes = require('./recipes');
const userRoutes = require('./users');

router.use('/saved', recipeRoutes);
router.use('/users', userRoutes);
module.exports = router;

