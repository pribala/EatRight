const router = require('express').Router();
const recipesController = require('../../controllers/recipesController');
const commentsController = require('../../controllers/commentsController');

// Matches with "/api/saved"
router
  .route('/')
  .get(recipesController.findAll)
  .post(recipesController.create)
  .get(commentsController.findAll)
  .post(commentsController.create);

// Matches with "/api/articles/:id"
router
  .route('/:id')
  .get(recipesController.findById)
  // .get(commentsController.findAll)
  .put(recipesController.update)
  .delete(recipesController.remove)
  .get(commentsController.findById)
  // .get(commentsController.findAll)
  .put(commentsController.update)
  .delete(commentsController.remove);
module.exports = router;
