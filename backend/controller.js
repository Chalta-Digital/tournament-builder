var express = require('express');
var router = express.Router();
const uuidv4 = require('uuid/v4');
var camels = [];

// Return a list of all camels
router.get('/', function(req, res, next) {
    res.json({'camels': camels});
});

// Create a new camel
router.post('/', function(req, res, next) {
    var camel = new Object(req.body);
    camel._id = uuidv4();
    camels.push(camel);
    res.status(201).json(camel);
});

// Return the camel with the given ID
router.get('/:id', function(req, res, next) {
    var id = req.params.id;
    res.json(camels[id]);
});

// Delete the camel with the given ID
router.delete('/:id', function(req, res, next) {
    var id = req.params.id;
    console.log(`deletion of ${id}`)
    var index = camels.findIndex(camel => camel._id === id);
    var camel = new Object(camels[index]);
    try {
        camels.splice(index, 1);
    }
    catch (err) {
        return res.status(404).json({'message': 'Camel not found'});
    }
    res.json(camel);
});

module.exports = router;
