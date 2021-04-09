const User = require('../models/User');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
module.exports = {
    register: async (req, res) => {
        try {
            if(!req.body.password || req.body.password != req.body.confirmPassword) {
                return res.status(400).send({
                    error: true,
                    message: 'Passwords do not match!'
                });
            }

            const user = await User.findOne({ email: req.body.email });

            if(user) {
                return res.status(400).send({
                    error: true,
                    message: 'User with that email already exists'
                });
            }

            // we hash the password and we create the user
            req.body.password = bcrypt.hashSync(req.body.password);
            await User.create(req.body);

            res.status(201).send({
                error: false,
                message: `User created successfully.`
            });

        } catch (error) {
            res.status(500).send({
                error: true,
                message: error.message
            });
        }
    },

    login: async (req, res) => {
        try {
            const user = await User.findOne({email: req.body.email})
            // check if user exists
            if(!user) {
                return res.status(404).send({
                    error: true,
                    message: 'User with provided email does not exists'
                });
            }
            // check if entered password is correct
            if(!bcrypt.compareSync(req.body.password, user.password)) {
                return res.status(401).send({
                    error: false,
                    message: 'Incorrect password!. Try again please.'
                });
            }

            // generate and send json web token for jwt authentication
            const payload = {
                _id: user._id,
                email: user.email
            };

            const token = jwt.sign(payload, 'secret_key', {
                expiresIn: '30m'
            });
            res.send({
                error: false,
                token: token,
                message: 'JWT generated successfully'
            });
        } catch(error) {
            return res.status(500).send({
                error: true,
                message: error.message
            })
        } 
    },
    refresh_token: (req, res) => {
        // Otkako ke se logira korisnikot imame pristap do req.user objektot. Toa se podatoci za logiraniot korisnik.
        console.log(req.user);
        const payload = {
          id: req.user.id,
          email: req.user.email
        };
    
        const token = jwt.sign(payload, 'secret_key', {
          expiresIn: '30m'
        });
    
        res.status(200).send({
          error: false,
          message: 'JWT successfully refreshed',
          token
        })
      }
};