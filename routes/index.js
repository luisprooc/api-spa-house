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
    /*
    router.get('/search?:b', 
        houseController.filterBeedrom
    );
    */
    router.get('/search?:p', 
        houseController.filterPrice
    );

    return router;
} 