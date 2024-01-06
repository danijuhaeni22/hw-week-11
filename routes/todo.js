const express = require("express");
const router = express.Router();
const TodoControllers = require("../controllers/todoControllers");

router.get('/', TodoControllers.getAll)
router.get('/:id', TodoControllers.getById)
router.post('/', TodoControllers.create)
router.delete('/:id', TodoControllers.delete)

module.exports = router;
