
const express = require('express');
const router = express.Router();

//accesing Model
const userModel = require('../models/User');


// @GET API => http://localhost:5000/api
// @OUTPUTS => firstname , lastname

router.get('/', (req, res, next) => {

    userModel.find({}, (err, data) => {

        if (err) throw err;

        else {
            res.json(data);
        }

    })

})

// @POST API => http://localhost:5000/api
// @INPUTS => firstname , lastname

router.post('/', (req, res, next) => {

    // get firstname & lastname from req.body

    const { firstname, lastname } = req.body;
    
    console.log(req.body);
    
    newUserModel = new userModel({
        firstname,
        lastname
    })

    newUserModel.save((err, data) => {

        if (err) throw err;

        else {
            res.send('DATA SAVED TO MONGODB !')
        }
        
    })

})

module.exports = router;