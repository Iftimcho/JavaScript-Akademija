const User = require('../models/User');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
module.exports = {
    fetch: async (req, res) => {
        try {
            const users = await User.find();
            res.status(200).send({
            error: false,
            users: users
        });
        } catch (error) {
            res.status(500).send({
                error: true,
                message: error.message
            });
        }
        
    },
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
    }
};