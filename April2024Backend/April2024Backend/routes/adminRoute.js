const { Router } = require('express');
const { urlLogger } = require('../middlewares/middlewares');
const { createReadStream, readFileSync } = require('fs');
const { resolve } = require('path');
const router = Router();

router.use(urlLogger)

router.get('/admin', (req, res) => {
    res.send("<h1>Admin Page</h1>");
})

router.get('/registrations', (req, res) => {
    let content = readFileSync(resolve('resources', 'private', 'student_list', 'registeration.json'))
    content = JSON.parse(content)
    if (req.query.name) {
        content = content.filter(item => item.name.toLowerCase().includes(req.query.name))
        console.log(content);
    }
    res.send(content)
})
router.get('/registrations/:id', (req, res) => {
    let { id } = req.params
    let content = readFileSync(resolve('resources', 'private', 'student_list', 'registeration.json'))
    content = JSON.parse(content)
    content = content.find(item => item.id == id)
    res.send(content)
})
module.exports = router