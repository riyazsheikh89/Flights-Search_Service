const { AirportService } = require('../services/index');
const airportService = new AirportService();

const create = async(req, res) => {
    try {
        const response = await airportService.create(req.body);
        return res.status(201).json({
            message: "Successfully Created an Airport",
            err: {},
            data: response,
            success: true
        })
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            data: {},
            success: false,
            err: error,
            message: "Unable to create new Airport!"
        })
    }
}


module.exports = {
    create
}