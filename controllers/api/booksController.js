const db = require("../../models");
const router = require("express").Router();

/**
 * Book - Read All
 */
router.get("/", function (req, res) {
  db.Book.findAll()
    .then(dbModel => res.json(dbModel))
    .catch(err => res.status(422).json(err));
});

/**
 * Book - Read One
 */
router.get("/:id", function (req, res) {
  db.Book.findById(req.params.id)
    .then(dbModel => res.json(dbModel))
    .catch(err => res.status(422).json(err));
});

/** 
 * Book - Create
 */
router.post("/",  function (req, res) {
  db.Book.create({ ...req.body })
    .then(dbModel => res.json(dbModel))
    .catch(err => res.status(422).json(err));
});

/**
 * Book - Delete
 */
router.delete("/:id", function (req, res) {
  db.Book.destroy({ where: { id: req.params.id } })
    .then(dbModel => res.json(dbModel))
    .catch(err => res.status(422).json(err));
});

// Defining methods for the booksController
module.exports = router;
