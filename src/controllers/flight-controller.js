const {FlightService} = require('../services/index');
const {SuccessCodes} = require('../utils/error-codes');

const flightService = new FlightService();

const create = async (req, res ) => {
    try {
        const flightRequestData = {
            flightNumber: req.body.flightNumber,
            airplaneId: req.body.airplaneId,
            departureAirportId: req.body.departureAirportId,
            arrivalAirportId: req.body.arrivalAirportId,
            arrivalTime: req.body.arrivalTime,
            departureTime: req.body.departureTime,
            price: req.body.price
        }
        const flight = await flightService.createFlight(flightRequestData);
        return res.status(SuccessCodes.CREATED).json({
            data: flight,
            success: true,
            err: {},
            message: "Successfully created a Flight"
        })
    } catch (error) {
        console.log(error);
        res.status(500).json({
            data: {},
            success: false,
            message: "unable to create a flight!",
            err: error
        });
    }
}

const get = async (req, res) => {
    try {
        const response = await flightService.getFlight(req.params.id);
        return res.status(SuccessCodes.OK).json({
            data: response,
            success: true,
            err: {},
            message: "Successfully fetched the city"
        })
    } catch (error) {
        console.log(error);
        res.status(500).json({
            data: {},
            success: false,
            message: "unable to fetch flights!",
            err: error
        });
    }
}


const getAll = async (req, res) => {
    try {
        const response = await flightService.getAllFlightData(req.query);
        return res.status(SuccessCodes.OK).json({
            data: response,
            success: true,
            err: {},
            message: "successfully fetched all flights"
        })
    } catch (error) {
        console.log(error);
        res.status(500).json({
            data: {},
            success: false,
            message: "unable to fetch flights!",
            err: error
        });
    }
}

const update = async (req, res) => {
    try {
        const response = await flightService.updateFlights(req.params.id, req.body);
        return res.status(SuccessCodes.OK).json({
        success: true,
        data: response,
        message: 'Successfully updated flight',
        err: {}
    });
    } catch (error) {
        console.log(error);
        res.status(500).json({
            data: {},
            success: false,
            message: "unable to update the flights!",
            err: error
        });
    }
}

module.exports = {
    create,
    get,
    getAll,
    update
}