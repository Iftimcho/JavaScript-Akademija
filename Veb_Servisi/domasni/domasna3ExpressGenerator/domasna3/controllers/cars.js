const mongoose = require('mongoose')
const Car = require('../models/car')

module.exports = {
  // same as below method - just written with then catch syntax
  getCarsThenCatch: (req, res) => {
    Car.find()
       .then(cars => {
        res.send({
          message: 'A list of all cars in the database',
          cars: cars
        })
       })
       .catch(err => {
        res.send({
          message: `Error: ${err.message}`
        })
       })
  },
  fetch: async (req, res) => {
    try {
      const cars = await Car.find()
      
      res.send({
        message: 'A list of all cars in the database',
        cars: cars
      })
    } catch (err) {
      res.send({
        message: `Error: ${err.message}`
      })
    }
  },
  create: async (req, res) => {
    try {
      const car = new Car({ ...req.body, _id: new mongoose.Types.ObjectId() });
      await car.save();

      res.send({
        message: 'New car successfully created',
        car: req.body
      });
    } catch (err) {
      res.send({
        message: `Error: ${err.message}`
      });
    }
  },
  del: async (req, res) => {
      try{
        // throw new Error('Error occured');
        const carToDel = await Car.remove({_id: req.params._id});
        res.send({
            message: `Post with id ${req.params._id} was removed!`
        });
      }
       catch (err) {
          res.status(404).send({
              message: err.message
          });
      }
  },
  update: async(req,res) => {
      try {
        const carToUpdate = new Car({
            manufacturer: req.body.manufacturer,
            model: req.body.model,
            year: req.body.year,
            serial_number: req.body.serial_number
        });
        const updated = await Car.updateOne({_id: req.params._id}, carToUpdate)
        res.send({
            message: `Car with id ${req.params._id} updated`
        });
      } catch (err) {
          res.send({
              message: `Error: ${err.message}`
          })
      }
  },
  updatePatch: async (req, res) => {
      try{        
        const result = await Car.findByIdAndUpdate(req.params._id, req.body);
        const newCar = await Car.findById(req.params._id);
        res.send({
            message: `Car updated`,
            car: newCar
        });
      } catch (err) {
          res.send({
              message: `Error: ${err.message}`
          });
      }
  }
}