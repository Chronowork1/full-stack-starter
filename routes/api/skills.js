//EXPRESS: back end and node.js web application framework 
//designed for building web applications and APIs
//Used for designed for building web applications and APIs

//calling express
const express = require('express')

//Cretated when you want to create a new router object to handle requests
const router = express.Router();

//Requesting and responding data being sent and received
router.get('/', async function(req, res){

    //Hard Code data
    //respose send json data back to client
    res.json([
        {id: 1, name:"HTML"},
        {id: 2, name: "CSS"}
    ])
})

//Export Router
module.exports = router