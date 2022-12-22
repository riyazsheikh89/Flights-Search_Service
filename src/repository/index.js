/* this file will export all the repository files to service layer.
we can directly require from service layer also, but
let suppose there are 10 repository files, we have to require all the 10 files
instead of doing that we can export all the repository file from this index.js */
module.exports = {
    CityRepository: require('./city-repository')
}