const router = require('express').Router()
const all = require('../controllers/all')
const ntbController = require('../controllers/ntbController')

router.get('/', (req, res) => {
  res.status(200).json({message : 'Data Berasala Dari BMKG'})
})

router.get('/all', all)

router.get('/ntb', ntbController)

module.exports = router