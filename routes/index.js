// Brings in express routing 
const router = require('express').Router()


// use /api before to access apiRoutes 
router.use('/api', require('./apiRoutes.js'))
// connects url to html pages in htmlRoutes
router.use('/', require('./htmlRoutes.js'))


// Bundles together and export to server.js
module.exports = router