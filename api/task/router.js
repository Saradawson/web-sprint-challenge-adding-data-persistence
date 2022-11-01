const express = require('express');
const Task = require('./model');
const router = express.Router();

router.get('/', async (req, res, next) => {
    try{
        const tasks = await Task.getAll()
        const mapTasks = tasks.map(task => {
            return {
                ...task,
                task_completed: task.task_completed ? true : false
            }
        })
        res.json(mapTasks)
    }catch(err){
        next(err)
    }
})

router.post('/', async (req, res, next) => {
    try{
        const task = await Task.create(req.body)
        res.status(201).json({...task, task_completed: task.task_completed ? true : false})
    }catch(err){
        next(err)
    }
})

router.use((err, req, res, next) => { //eslint-disable-line
    res.status(500).json({
        message: 'something went wrong in tasks router',
        error: err.message
    })
})

module.exports = router;
