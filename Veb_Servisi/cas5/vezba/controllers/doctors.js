const mongoose = require('mongoose');
const Doctor = require('../models/doctor');

module.exports = {
    getDoctors: async (req, res) => {
        try{
            const doctors = await Doctor.find();
            res.send(doctors);
        } catch (err) {
            res.send(`Error: ${err}`);
        }
    },
    getById: async (req, res) => {
        try{
            const doctorFound = await Doctor.findById(req.params.id);
            res.send(doctorFound);
        } catch (err) {
            res.send(`Error: ${err}`);
        }
    },
    create: async (req, res) => {
        try{
            const doctor = new Doctor({ ...req.body, _id: new mongoose.Types.ObjectId() });
            await doctor.save();
            res.send({
                message: 'Doctor added',
                doctor: doctor
            });
        } catch(err) {
            res.send(`Error: ${err}`);
        }
    }
}

