const router = require("express").Router();
const articleController = require("../../controllers/nytArticleController");

// Matches with "/api/articles"
router.route("/")
  .get(articleController.findAll);
 


module.exports = router;
