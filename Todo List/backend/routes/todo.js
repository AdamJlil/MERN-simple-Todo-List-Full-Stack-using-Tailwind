const express = require('express');

const {
    todoSelectAll,
    todoSelectById,
    todoDeleteByID,
    todoUpdateById,
    todoCreateOne
} = require('../controllers/todoController');


//router
const router = express.Router();

//SELECT all
router.get('/', todoSelectAll)

//SELECT by id
router.get('/:id', todoSelectById)

//POST new workout
router.post('/', todoCreateOne)

//DELETE workout by ID
router.delete('/:id', todoDeleteByID);

//UPLOAD workout by ID
router.patch('/:id', todoUpdateById)

//export router
module.exports = router;
