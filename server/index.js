const express = require('express')
const mongoose = require('mongoose')

const cors = require('./cors.js')
const controllers = require('./controllers.js')
const userController = require('./userController.js')
const newsController = require('./newsController.js')
const auth = require('./middlewares/auth.js')
const port = process.env.PORT || 5000

start()
async function start(){
    await new Promise((resolve,reject)=>{
        mongoose.connect('mongodb://localhost:27017/caves')
        const db = mongoose.connection
        db.once('open',()=>{
            console.log('Database connected');
            resolve()
        })
        db.on('error',(err)=>{
            console.log('Error');
            reject(err)
        })
    })
    
  
    const app = express()
    
    app.use(cors())
    app.use(auth())
    app.use(express.json())
    
    
    app.use('/data/catalog', controllers)
    app.use('/user', userController)
    app.use('/data/news', newsController)

    app.get('/', (req, res) => {
        res.send('hi')
    })

    app.listen(port, () => console.log(`Server is listening on port ${port}`))
}
