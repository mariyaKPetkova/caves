const router = require('express').Router()
const newsService = require('./services/news.js')

router.get('/', async (req, res) => {
    const data = await newsService.getAll()

    res.json(data)
})
router.get('/:id', async (req, res) => {

    const data = await newsService.getOne(req.params.id)

    res.json(data)
})
module.exports = router