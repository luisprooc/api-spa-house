const House = require("../models/house");


// Add new House
exports.newHouse = async(req,res,next) =>{
    
    const house = new House(req.body);

    try {
        await house.save();
        res.json({message:`House Added`});
    } 
    catch (error) {
        console.log(error);
        next();
    }
}

// View all Houses
exports.allHouses = async(res,next) =>{
    
    try {
        const houses = await House.find({});
        res.json(houses);
    } 
    catch (error) {
        console.log(error);
        next();
    }
}

// View House by id
exports.viewHouse = async(req,res,next) =>{
    try {
        const house = await House.findById(req.params.id);
        res.json(house);
    } 
    catch (error) {
        console.log(error);
        next();
    }
}

// add Interest
exports.addInterest = async(req,res,next) =>{
    try {
        await House.where({ _id: req.params.id }).update({ interest: req.body.interest });
        res.json({message: `Interest updated`});
    } 
    catch (error) {
        console.log(error);
        next();
    }
}
