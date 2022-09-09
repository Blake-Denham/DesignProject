const { Vehicle } = require("../db/vehicle")

module.exports.AddVehicle = async (req, res) => {
    console.log(req.body)

    const { imei, name, timeLastSeen, lastLocation, mass } = req.body
    const newVehicle = new Vehicle({ imei, name, timeLastSeen, lastLocation, mass });

    await newVehicle.save()
    res.redirect('/')
    
}
