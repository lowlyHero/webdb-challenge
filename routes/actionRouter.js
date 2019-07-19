const router = require('express').Router();

const db = require('../model/actionModel');

router.post('/', async (req, res) => {
    try {
        const actions = await db.add(req.body);
        res.status(201).json(actions);
    } catch(error) {
        console.log(error);
        res.status(500).json({ message: 'Internal error. Cannot add data.' });
    }
});

router.post('/:id', async (req, res) => {
    try {
        const actions = await db.add(req.body);
        if(actions) {
          res.status(201).json(actions);
        } else {
            res.status(404).json({ message: 'This project could not be found. Please try again.' });
        }
    } catch(error) {
        console.log(error);
        res.status(500).json({ message: 'Internal error. Cannot add data.' });
    }
});

module.exports = router;