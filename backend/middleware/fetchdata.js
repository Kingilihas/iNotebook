var jwt = require('jsonwebtoken');

const Sign = "Ilihas#213"


const fetchuser =(req, res, next) => {

    // get the user from jwt token and add the user to request


    // get the token from header
    const token = req.header('auth-token');


    if (!token) {
        // if the token no exists
        res.status(401).send({ error: 'acess denied' });

    }




    try {
 // get the hidden id from token
        const data =  jwt.verify(token, Sign)
        
        req.user = data.user;

    // after the id has been retrieved the next is called which is next fuction to fetchuser of auth.js Route 3    
        next();

    } catch (error) {
        res.status(400).send({ error: '11Bad request ' });

    }



}

module.exports = fetchuser