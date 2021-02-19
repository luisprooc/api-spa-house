const express = require('express');
const router = express.Router();
const houseController = require("../controllers/houseControllers");

module.exports = function(){

    router.post('/new', 
        houseController.newHouse
    );

    router.get('/', 
        houseController.allHouses
    );

    router.get('/:id', 
        houseController.viewHouse
    );

    router.patch('/interest/:id', 
        houseController.addInterest
    );

    return router;
} 