// Brings in stuff
const router = require('express').Router()
const path = require('path')
const fs = require('fs')
// cool random unique id generator
const uuid = require('uuid')


// Get
router.get('/notes', (req, res) => {
    fs.readFile(path.join(__dirname, '..', 'db', 'db.json'), 'utf8', (err, data) => {
        if (err) {console.log(err)}
        res.json(JSON.parse(data))
    })
})


// Post
router.post('/notes', (req, res) => {
    fs.readFile(path.join(__dirname, '..', 'db', 'db.json'), 'utf8', (err, data) => {
        if (err) {console.log(err)}
        let notes = JSON.parse(data)
        notes.push({
            id: uuid.v1(),
            title: req.body.title,
            text: req.body.text
          })
        fs.writeFile(path.join(__dirname, '..', 'db', 'db.json'), JSON.stringify(notes), err => {
            if (err) {console.log(err)}
            res.json(notes)
        })
    })
})


// Put
// router.put('/notes/:title', (req, res) => {
// })


// Delete
router.delete('/notes/:id', (req, res) => {
    fs.readFile(path.join(__dirname, '..', 'db', 'db.json'), 'utf8', (err, data) => {
        if (err) {console.log(err)}
        let notes = JSON.parse(data)
        notes = notes.filter(note => note.id !== req.params.id)
        fs.writeFile(path.join(__dirname, '..', 'db', 'db.json'), JSON.stringify(notes), err => {
            if (err) {console.log(err)}
            res.sendStatus(200)
        })
    })
})

module.exports = router