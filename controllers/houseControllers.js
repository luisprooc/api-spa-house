const House = require("../models/house");

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