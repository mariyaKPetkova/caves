const Cave = require('../models/Cave.js')

async function getAll() {
    return Cave.find({}).lean()
}
async function create(data) {
    const result = new Cave(data)
    await result.save()
    return result
}
async function getOne(id) {
    return Cave.findById(id) //.lean()
}
async function del(id) {
    return Cave.findByIdAndDelete(id).lean()
}
async function update(originalData,updatedData) {
    Object.assign(originalData,updatedData)
    await originalData.save()
    return originalData
}
module.exports = {
    getAll,
    getOne,
    create,
    del,
    update
}