# Welcome to Flights Service

## Project Setup
- clone the project on your local
- Execute `npm install` on the same path as of your root directory of teh downloaded project
- Create a `.envs` file in the root directory and add the following environment variable
    - PORT = 3000
- Inside the `src/config` folder create a new file `config.json` and then add the following piece of json

```
{
    "development": {
    "username": "your_db_login_name",
    "password": "<your_db_password",
    "database": "Flights_Search_DB_DEV",
    "host": "127.0.0.1",
    "dialect": "mysql"
  }
}
```
- Once you've added your db config as listed above, go to the src folder from your terminal and execute `npx sequelize db:create` and then execute `npx sequelize db:migrate`


## DB Design
- City Table
- Airport Table
- Airplane Table
- Flight Table

A flight belongs to an airplane but one airplane can be used in multiple flights.
A city has many airports but one airport belongs to a city.
One airport can have many flights, but a flight belongs to one airport.


## Tables

### City
- Attributes: id, name, created_at, updated_at
- Create model for City:
```
npx sequelize model:generate --name City --attributes name:String
```

### Airport
- Attributes: id, name, address, city_id, created_at, updated_at
- Relationship - City has many airport, but one airport belongs to one city (one to many)
- Create model for Airport:
```
npx sequelize model:generate --name Airport --attributes name:String,address:String,cityId:integer
```
- Create Seeder:
```
npx sequelize seed:generate --name add-airports
```
- Seed all files:
```
npx sequelize db:seed:all
```

### Airplane
- Attributes: modelNumber, capacity, created_at, updated_at
- Create model for Airplane:
```
npx sequelize model:generate --name Airplane --attributes modelNumber:String,capacity:integer
```
- Create Seeder:
```
npx sequelize seed:generate --name add-airplanes
```
- Seed all files:
```
npx sequelize db:seed:all
```
