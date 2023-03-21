const todo = require('../modules/todo');
const mongoose = require('mongoose');


//SELECT ALL
const todoSelectAll = async (req, res) => {
    const todos = await todo.find({}).sort({createdAt: -1});

    if(!todos){
        return res.status(404).json('No Todos Were Found!');
    }
    res.status(200).json(todos);
};

//SELECT BY ID
const todoSelectById = async (req, res) => {
    const {id} = req.params;
    const oneTodo = await todo.findById({_id: id});

    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json('This Todo Doesn\'t Exist!');
    }

    if(!oneTodo){
        return res.status(404).json('No Todos Were Found!');
    }

    res.status(200).json(oneTodo);
};



//DELETE BY ID
const todoDeleteByID = async (req, res) => {
    const {id} = req.params;

    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json('This Todo Doesn\'t Exist!');
    }

    const todoDelete = await todo.findByIdAndDelete({_id: id});
    
    if(!todoDelete){
        return res.status(404).json('Cannot Delete This Todo!');
    }
    res.status(200).json(todoDelete);
}

//UPDATE BY ID
const todoUpdateById = async (req, res) => {
    const {id} = req.params;
    const { title, desc} = req.body;

    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json('This Todo Doesn\'t Exist!');
    }

    const todoUpdate = await todo.findByIdAndUpdate({_id: id}, {title, desc});
    
    if(!todoUpdate){
        return res.status(404).json('Cannot Update This Todo!');
    }
    res.status(200).json(todoUpdate);
}

//CREATE BY ID
const todoCreateOne = async (req, res) => {
    const { title, desc} = req.body;

    try{
        const todoPost = await todo.create({title, desc});
        res.status(200).json(todoPost);
    }
    catch(err){
     res.status(400).json('Oops! Something Went Wrong!');
    }
    
}


//exprot
module.exports = {
    todoSelectAll,
    todoSelectById,
    todoDeleteByID,
    todoUpdateById,
    todoCreateOne
}