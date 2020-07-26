var express = require('express');
var router = express.Router();

const bcrypt = require('bcryptjs');
const uuid = require('uuid');
const jwt = require('jsonwebtoken');

const userMiddleware = require('../middleware/users');
var pgPoolClient = require('../db_config/db_con').pgPoolClient;

router.post('/login', (req, res, next) => {
    const qText = `SELECT * FROM users WHERE username = ${db.escape(req.body.username)};`
    pgPoolClient.query(qText, (err, res) => {
        if (err) {
            throw err;
            return res.status(400).send({
              msg: err
            });
          }
        if (!result.length) {
        return res.status(401).send({
            msg: 'Username or password is incorrect!'
        });
        }
    });
});
router.get('/secret-route', userMiddleware.isLoggedIn, (req, res, next) => {
    console.log(req.userData);
    res.send('This is the secret content. Only logged in users can see that!');
  });

// router.post('/login', (req, res, next) => {
//     return res.status(200).send({
//         msg: 'Logged in!',
//         user: 'user'
//     });
// });

module.exports = router;
