const News = require('../models/News.js')

async function getAll() {
    return News.find({}).lean()
}
async function getOne(id) {
    return News.findById(id) //.lean()
}

module.exports = {
    getAll,
    getOne
    
}
