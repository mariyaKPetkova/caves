const router = require('express').Router()
const auth = require('./middlewares/auth.js')
const { isAuht, isOwner } = require('./middlewares/guards.js')
const preload = require('./middlewares/preload.js')
const caveService = require('./services/caves.js')
const { parseError } = require('./util.js')

router.get('/', async (req, res) => {

    const data = await caveService.getAll()
    res.json(data)
})
router.post('/', async (req, res) => {
    
    const data = {
        name: req.body.name,
        location: req.body.location,
        description: req.body.description,
        imageUrl: req.body.imageUrl,
        author: req.user._id
    }
    try {
        const result = await caveService.create(data)
        res.status(201).json(result)
    } catch (err) {
        const message = parseError(err)
        res.status(err.status || 400).json({message})
    }

})
router.get('/:id', async (req, res) => {

    const data = await caveService.getOne(req.params.id)
     
    res.json(data)
})
router.put('/:id', async (req, res) => {
    const oldData = await caveService.getOne(req.params.id)
    const newData = {
        name: req.body.name,
        location: req.body.location,
        description: req.body.description,
        imageUrl: req.body.imageUrl,
        likes:req.body.likes,
        //countLikes: req.body.likes.length
    }
    // console.log(oldData)
    // console.log(newData)
    try {
        const result = await caveService.update(oldData,newData)
        
        res.json(result)
    } catch (err) {
        const message = parseError(err)
        res.status(err.status || 400).json({message})
    }
})
router.delete('/:id', async (req, res) => {

    const data = await caveService.del(req.params.id)
    res.json(data)
})
module.exports = router