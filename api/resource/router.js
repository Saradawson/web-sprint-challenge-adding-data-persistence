const express = require('express');
const Resource = require('./model');
const router = express.Router();

router.get('/', async (req, res, next) => {
    try{
        const resources = await Resource.getAll()
        res.json(resources)
    }catch(err) {
        next(err)
    }
})

router.post('/', async (req, res, next) => {
    try{
        const resource = await Resource.create(req.body)
        res.status(201).json(resource)
    }catch(err) {
        next(err)
    }
})

router.use((err, req, res, next) => { //eslint-disable-line
    res.status(500).json({
        message: 'something went wrong in resources router',
        error: err.message
    })
})

module.exports = router;
