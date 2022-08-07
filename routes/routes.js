const router = require('express').Router()

// router.use('/', require('./index'))
router.use('/product', require('./product'))
// router.use('/deploy', require('./deploy'))

module.exports = router
