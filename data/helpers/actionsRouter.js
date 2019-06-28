const express = require('express');

const Action = require('./actionsModel');
const router = express.Router();

router.post('/', async (req, res) => {
    try {
        const projs = await Action.insert(req.body);
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
        const projs = await Action.insert(req.body);
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