const { Schema, model } = require('mongoose')

const schema = new Schema({
    email: { type: String ,required: [true, 'Name is required'], minLength: [3, 'Name must be at least 3 symbols long'] },
    hashedPassword: { type: String }
})

module.exports = model('User', schema)