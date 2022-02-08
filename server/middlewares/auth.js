const  jwt  = require('jsonwebtoken')
const { SECRET } = require('../config.js')

module.exports = () => (req, res, next) => {
    const token = req.headers['x-authorization']
    try {
        if (token) {
            const data = jwt.verify(token, SECRET)
            req.user = data
        }
        
    } catch (err) {
        console.log(err.message)
        //res.status(401).json({ message: 'Invalid access token' })
    }
    next()
}