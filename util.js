const util = require('util');
let { readFile } = require('fs');
readFile = util.promisify(readFile);
readFile('resources/private/texts/cars.txt', { encoding: 'utf-8' }).then(console.log)
