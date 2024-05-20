const express = require('express');
const { resolve } = require('path');
const adminRoute = require('./routes/adminRoute');
const { dateLogger, urlLogger } = require('./middlewares/middlewares');
const { writeFile } = require('fs/promises');
const {  existsSync, readFileSync } = require('fs');
const app = express();


let middlewares = [dateLogger, urlLogger];
app.get('/', (req, res) => {
    res.sendFile(resolve('resources', 'private', 'pages', 'home.html'));
})

app.get('/assets/*', (req, res) => {
    res.sendFile(resolve('assets', req.url.slice(8)));
})
app.use(adminRoute);
app.use(middlewares);
app.get('/about', (req, res) => {
    res.sendFile(resolve('resources', 'private', 'pages', 'about.html'));
})

app.get('/contact', middlewares, (req, res) => {
    res.sendFile(resolve('resources', 'private', 'pages', 'contact.html'));
})

app.post('/contact', (req, res) => {
    res.send('Thanks for contacting us!');
})

app.get('/register', (req, res) => {
    res.sendFile(resolve('resources', 'private', 'pages', 'register.html'));
})
app.get('/handle-register', (req, res) => {
    let data = req.query;
    let db = []
    if (existsSync(resolve('resources', 'private', 'student_list', 'registeration.json'))) {
        db = readFileSync(resolve('resources', 'private', 'student_list', 'registeration.json'), 'utf-8');
        db = JSON.parse(db);
    }
    data.id = db.length + 1;
    db.push(data);
    writeFile(resolve('resources', 'private', 'student_list', 'registeration.json'), JSON.stringify(db));
    res.redirect('/');
})

app.get('*', (req, res) => {
    res.status(404).sendFile(resolve('resources', 'private', 'pages', '404.html'));
});
app.listen(3000, () => console.log('Server is running on port 3000\nvisit http://localhost:3000'));