const express = require('express');
const router = express.Router();

const FlightMiddleware = require('../../middlewares/flight-middlewares');

const CityController = require('../../controllers/city-controller');
const FlightController = require('../../controllers/flight-controller');
const AirportController = require('../../controllers/airport-controller');

router.post('/city', CityController.create);
router.delete('/city/:id', CityController.destroy);
router.get('/city/:id', CityController.get);
router.get('/city', CityController.getAll)
router.patch('/city/:id', CityController.update);


router.post('/flights',
    FlightMiddleware.validateCreateFlight,
    FlightController.create
);
router.get('/flights/:id', FlightController.get);
router.get('/flights', FlightController.getAll);
router.patch('/flights/:id', FlightController.update);


router.post('/airports', AirportController.create);

module.exports = router;