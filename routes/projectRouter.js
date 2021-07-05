const router = require('express').Router();

const db = require('../model/projectModel');

router.get('/', async (req, res) => {
    try {
        const projs = await db.find();
        if(projs) {
          res.status(200).json(projs);
        } else {
            res.status(404).json({ message: 'This project could not be found. Please try again.' });
        }
    } catch(error) {
        console.log(error);
        res.status(500).json({ message: 'Internal error. Cannot retrieve data.' });
    }
});

router.get('/:id', async (req, res) => {
    try {
        const projs = await db.findById(req.params.id);
        if(projs) {
          res.status(200).json(projs);
        } else {
            res.status(404).json({ message: 'This project could not be found. Please try again.' });
        }
    } catch(error) {
        console.log(error);
        res.status(500).json({ message: 'Internal error. Cannot retrieve data.' });
    }
});

router.post('/', async (req, res) => {
    try {
        const projs = await db.add(req.body);
        res.status(201).json(projs);
    } catch(error) {
        console.log(error);
        res.status(500).json({ message: 'Internal error. Cannot add data.' });
    }
});

router.post('/:id', async (req, res) => {
    try {
        const projs = await db.add(req.body);
        if(projs) {
          res.status(201).json(projs);
        } else {
            res.status(404).json({ message: 'This project could not be found. Please try again.' });
        }
    } catch(error) {
        console.log(error);
        res.status(500).json({ message: 'Internal error. Cannot add data.' });
    }
});

module.exports = router;