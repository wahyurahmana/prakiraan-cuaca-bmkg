const router = require('express').Router()
const all = require('../controllers/all')
const baliController = require('../controllers/baliController')
const ntbController = require('../controllers/ntbController')

router.get('/', (req, res) => {
  res.status(200).json({message : 'Data Berasal Dari BMKG'})
})

router.get('/all', all)

router.get('/ntb', ntbController)
router.get('/bali', baliController)

module.exports = router