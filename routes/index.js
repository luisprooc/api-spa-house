const express = require('express');
const router = express.Router();
const houseController = require("../controllers/houseControllers");

module.exports = function(){

    router.post('/new', 
        houseController.newHouse
    );

    return router;
} 