const User = require('../models/User');


module.exports = {
    fetch: async (req, res) => {
        try {
            const users = await User.find();
            res.status(200).send({
                error: false,
                users // ova e isto kako users: users. Koga i key i value sse so isto ime moze da se napise samo edno do niv
        });
        } catch (error) {
            res.status(500).send({
                error: true,
                message: error.message
            });
        }
        
    },
    fetchOne: async (req, res) => {
        console.log(req.body);
        try{
            const user = await User.findOne({email: req.params.email});
            res.status(200).send({
                error: false,
                user: user
            });
        } catch (error) {
            return res.status(500).send({
                error: true,
                message: error.message
            });
        }
    }
};