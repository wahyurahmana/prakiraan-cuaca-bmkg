const router = require('express').Router()
const acehController = require('../controllers/acehController')
const all = require('../controllers/all')
const baliController = require('../controllers/baliController')
const bangkaBelitungController = require('../controllers/bangkaBelitungController')
const ntbController = require('../controllers/ntbController')

router.get('/', (req, res) => {
  res.status(200).json({message : 'Data Berasal Dari BMKG'})
})

router.get('/all', all)

router.get('/ntb', ntbController)
router.get('/bali', baliController)
router.get('/aceh', acehController)
router.get('/bangka-belitung', bangkaBelitungController)

module.exports = router