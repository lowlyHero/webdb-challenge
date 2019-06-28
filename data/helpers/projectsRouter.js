const express = require('express');

const Proj = require('./projectsModel');
const router = express.Router();

// ============ GET ================

router.get('/:id', async (req, res) => {
    try {
        const projs = await Proj.get(req.params.id);
        if(projs) {
          res.status(200).json(projs);
        } else {
            res.status(404).json({
                message: 'This project could not be found. Please try again.'
            })
        }
    } catch(error) {
        console.log(error);
        res.status(500).json({
            message: 'Internal error. Cannot retrieve data.'
        });
    }
});

//============ POST ================

router.post('/', async (req, res) => {
    try {
        const projs = await Proj.insert(req.body);
        res.status(201).json(projs);
    } catch(error) {
        console.log(error);
        res.status(500).json({
            message: 'Internal error. Cannot add data.'
        });
    }
});

router.post('/:id', async (req, res) => {
    try {
        const projs = await Proj.insert(req.body);
        if(projs) {
          res.status(201).json(projs);
        } else {
            res.status(404).json({
                message: 'This project could not be found. Please try again.'
            })
        }
    } catch(error) {
        console.log(error);
        res.status(500).json({
            message: 'Internal error. Cannot add data.'
        });
    }
});

module.exports = router;