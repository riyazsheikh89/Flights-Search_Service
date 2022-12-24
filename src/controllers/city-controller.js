const { CityService } = require('../services/index');

const cityService = new CityService();

// Method: POST
// 
const create = async (req, res) => {
    try {
        const city = await cityService.createCity(req.body);
        return res.status(201).json({
            data: city,
            success: true,
            message: "Successfully created new City",
            err: {}
        });
    } catch (error) {
        console.log(error);
        res.status(500).json({
            data: {},
            success: false,
            message: "not able to create a city!",
            err: error
        });
    }

}

// Method: DELETE
// -> ../city/:id
const destroy = async (req, res) => {
    try {
        const response = await cityService.deleteCity(req.params.id);
        return res.status(200).json({
           data: response,
           success: true,
           message: "Successfully deleted the city"
        });
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            data: {},
            success: false,
            message: "not able to delete the city!",
            err: error
        });
    }
}

// Method: GET
// -> ../city/:id
const get  = async (req, res) => {
    try {
        const response = await cityService.getCity(req.params.id);
        return res.status(200).json({
           data: response,
           success: true,
           message: "Successfully fetched the city"
        });
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            data: {},
            success: false,
            message: "not able to get the city!",
            err: error
        });
    }
}

// Method: PATCH
// -> ../city/:id
const update = async (req, res) => {
    try {
        const response = await cityService.updateCity(req.params.id, req.body);
        return res.status(200).json({
            data: response,
            success: true,
            message: "Successfully updated the city"
         });
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            data: {},
            success: false,
            message: "not able to get the city!",
            err: error
        });
    }
}


module.exports = {
    create,
    destroy,
    get,
    update
}