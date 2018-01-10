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
<<<<<<< HEAD
  .get(commentsController.findById)
  // .get(commentsController.findAll)
=======
  // .get(commentsController.findAll)
router
  .route('/comments')
  .post(commentsController.create);
router
  .route('/comments/:id')
  .get(commentsController.findById)
>>>>>>> f24a7bd8e53b0a0b6507a6dc7010f0c24d08d90b
  .put(commentsController.update)
  .delete(commentsController.remove);
module.exports = router;
