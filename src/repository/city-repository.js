const { City } = require('../models/index');

class CityRepository {

    // this func expect a object as parameter, 
    // in JS we can pass the properties of the object that we need, using {}
    async createCity ({name}) {
        try{
            const city = await City.create({name});
            return city;
        } catch (error) {
            console.log("something went wrong in repository layer!");
            throw {error};
        }
    }

    async deleteCity(cityID) {
        try{
            await City.destroy({
                where: { id: cityID }
            });
            return true;
        } catch(error){
            console.log("something went wrong in repository layer!");
            throw {error};
        }
    }

    async getCity(cityID) {
        try {
            const city = await City.findByPk(cityID);
            return city;
        } catch (error) {
            console.log("something went wrong in repository layer!");
            throw {error};
        }
    }

    async updateCity(cityID, data) {
        try {
            // to Just update the city, bellow approach is fine:
            /* const city = await City.update(data, {
                where: {id: cityID}
            }); */

            // if you want to return the details of updation, then this approach will works fine: 
            const city = await City.findByPk(cityID);
            city.name = data.name;
            await city.save()

            return city;
        } catch (error) {
            console.log("something went wrong in repository layer!");
            throw {error};
        }

    }
}


module.exports = CityRepository;