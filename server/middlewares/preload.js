const { getOne } = require("../services/caves.js")

module.exports = (paramName = 'id') => async (req, res, next) => {
const id = req.params[paramName]

const data = await getOne(id)
req.data = data

next()
}
