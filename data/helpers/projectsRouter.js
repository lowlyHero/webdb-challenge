const router = require('express').Router();

const Proj = require('./projectsModel');


// ============ GET ================

router.get('/projects', async (req, res) => {
    try {
        const projs = await Proj.find();
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

router.get('/projects/:id', async (req, res) => {
    try {
        const projs = await Proj.findById(req.params.id);
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

router.post('/projects', async (req, res) => {
    try {
        const projs = await Proj.add(req.body);
        res.status(201).json(projs);
    } catch(error) {
        console.log(error);
        res.status(500).json({
            message: 'Internal error. Cannot add data.'
        });
    }
});

router.post('/projects/:id', async (req, res) => {
    try {
        const projs = await Proj.add(req.body);
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