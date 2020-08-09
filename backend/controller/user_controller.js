var express = require('express');
var router = express.Router();

const bcrypt = require('bcryptjs');
const uuid = require('uuid');
const jwt = require('jsonwebtoken');

const userMiddleware = require('../middleware/users');
var pgPoolClient = require('../db_config/db_con').pgPoolClient;

router.post('/login', (req, res, next) => {
  
    // const qText = `SELECT * FROM users WHERE username = ${req.body.username};`
    
    const qText = `SELECT * FROM users WHERE username = '${req.body.username}' AND password = '${req.body.password}';`;
    
    // const qText = `SELECT * FROM users;`
    pgPoolClient.query(qText, (err, result) => {
        if (err) {
            throw err;
            return res.status(400).send({
                msg: err
            });
        }
        if (result.rows.length>0){
            const token = jwt.sign({
                username: result.rows[0].username,
                userId: result.rows[0].id
            },
            'SECRETKEY', {
                expiresIn: '7d'
            }
            );  
            return res.status(200).send({
                msg: 'Logged in!',
                token,
                user: result.rows[0]
            });
        }
        else{
            return res.status(401).send({
                msg: 'Username or password is incorrect!'
            });
        }
    });
});
router.get('/dashboard', userMiddleware.isLoggedIn, (req, res, next) => {
    console.log(req.userData);
    res.send('This is the secret content. Only logged in users can see that!');
});


module.exports = router;
