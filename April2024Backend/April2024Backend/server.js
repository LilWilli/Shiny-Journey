const { readFileSync, readFile: readFileCb } = require('fs');
const { readFile } = require('fs/promises');
const http = require('http');
const { resolve } = require('path');

const server = http.createServer((req, res) => {
    if (req.url === '/' || req.url === '/home') {
        let content = readFileSync(resolve('resources', 'private', 'pages', 'home.html'), 'utf-8');
        res.end(content);
    } else if (req.url === '/about') {
        readFile(resolve('resources', 'private', 'pages', 'about.html'), 'utf-8').then(content => {
            res.end(content);
        }).catch(err => {
            res.writeHead(500, { 'Content-Type': 'text/html' });
            res.end('<h1 style="color:red">Server error</h1>')
        });
    } else if (req.url === '/contact') {
        readFileCb(resolve('resources', 'private', 'pages', 'contact.html'), 'utf-8', (err, content) => {
            if (err) {
                res.writeHead(500, { 'Content-Type': 'text/html' });
                res.end('<h1 style="color:red">Server error</h1>')
            } else {
                res.end(content);
            }
        })
    } else if(req.url == 'assets/logoo.png'){
        let logo = readFileSync(resolve('assets', 'logoo.png'), 'utf-8');
        res.writeHead(200, { 'Content-Type': 'image/png' });
        res.end(logo)
    } else if (req.url.startsWith('/assets')) {
        let path = resolve('assets', req.url.slice(8));
        try {
            let file = readFileSync(path, 'utf-8');
            console.log('loading image: ', path);
            if (path.endsWith('.jpg') || path.endsWith('.png') || path.endsWith('.jpeg') || path.endsWith('.gif')) {                
                res.writeHead(200, { 'Content-Type': 'image/' + path.split('.').pop()});
            }
            res.end(file);
        } catch (error) {
            res.writeHead(500, { 'Content-Type': 'text/html' });
            res.end('<h1 style="color:red">Server error</h1>')
        }
    }  else {
        res.writeHead(404, { 'Content-Type': 'text/html'});
        let content = readFileSync(resolve('resources', 'private', 'pages', '404.html'), 'utf-8')
        res.end(content)
    }
})

server.listen(3000, () => {
    console.log("Server listening on port 3000\nhttp://localhost:3000");
})