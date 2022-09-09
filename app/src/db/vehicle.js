//Require Mongoose
const mongoose = require('mongoose');

//Define a schema
const Schema = mongoose.Schema;

const vehicleSchema = new Schema({
  imei: {type:String, unique: true, dropDups: true},
  name: {type:String},
  timeLastSeen:{type:Date},
  lastLocation: {
    lat: {type: Number},
    lng: {type: Number}
  },
  mass: { type: Number }
});

module.exports.Vehicle = mongoose.model('Vehicle', vehicleSchema)