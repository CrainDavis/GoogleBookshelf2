const router = require("express").Router();
// Import our controllers
const bookRoutes = require("./booksController");

// Hook up to the router
router.use("/books", bookRoutes);

// Export the router
module.exports = router;
