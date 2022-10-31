const express = require('express');
const Project = require('./model');
const router = express.Router();

router.get('/', async (req, res, next) => {
    try{
        const projects = await Project.getAll()
        res.json(projects)
    }catch(err) {
        next(err)
    }
})

router.post('/', async (req, res, next) => {
    try{
        const project = await Project.create(req.body)
        res.status(201).json(project)
    }catch(err) {
        next(err)
    }
})

router.use((err, req, res, next) => { //eslint-disable-line
    res.status(500).json({
        message: 'something went wrong in projects router',
        error: err.message
    })
})

module.exports = router;
