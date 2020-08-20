// Brings in express and path
const router = require('express').Router()
const path = require('path')

// Takes user to notes.html when /notes is passed in url
router.get('/notes', (req, res) => {
  res.sendFile(path.join(__dirname, '..', 'public', 'notes.html'))
})

// Any other url will default to index.html
router.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '..', 'public', 'index.html'))
  })

// Export
module.exports = router