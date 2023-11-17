const express = require("express");
const router = express.Router();

// Load each controller
const microPostsController = require("./microPosts.js");
const ebayApiRouter = require('./ebay-api');

// Mount each controller under a specific route. These
// will be prefixes to all routes defined inside the controller
router.use("/micro_posts", microPostsController);
router.use('/ebay-api', ebayApiRouter);


module.exports = router;
