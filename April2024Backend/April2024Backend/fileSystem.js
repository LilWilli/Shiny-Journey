const { readFileSync, writeFileSync, appendFileSync, openSync, readSync, read, existsSync, mkdirSync, rmSync, renameSync, copyFileSync, chmodSync, createReadStream } = require('fs');
const { readFile } = require('fs/promises');
const { resolve } = require('path');



// console.log('Before readFileSync');
// let data = readFileSync(resolve('resources', 'private', 'texts', 'cars.txt'), {encoding: 'utf-8'});
// console.log(data);
// console.log('After readFileSync');

// (async function () {
//     console.log('Before readFile');
//     let data = await readFile(resolve('resources', 'private', 'texts', 'cars.txt'), { encoding: 'utf-8' })
//     console.log(data);
//     console.log('After readFile');
// })()

// let students = writeFileSync(resolve('resources', 'private', 'texts', 'students.txt'), 'John\nJane\nBob\nJill', {flag: 'r'});

// appendFileSync(resolve('resources', 'private', 'texts', 'students.txt'), 'Ademola\nAdewale\nAdewunmi\nBola\nBolade\nBoluwatife\nDamilola\nNnamdi\nChidi\nEmeka');

// let file = openSync(resolve('resources', 'private', 'texts', 'cars.txt'), 'r');
// const bufferSize = 100;
// let buffer = Buffer.alloc(bufferSize);
// let bytesRead;
// 
// do {
//     bytesRead = readSync(file, buffer, 0, bufferSize);
//     console.log('bytesRead :>> ', bytesRead);
//     if (bytesRead > 0) {
//         console.log('next buffer :>> ', buffer.toString('utf8', 0, bytesRead));
//     }
// } while (bytesRead === bufferSize);
// if (!existsSync(resolve('resources', 'private', 'student_list'))) {
//     mkdirSync(resolve('resources', 'private', 'student_list'));
// }
// writeFileSync(resolve('resources', 'private', 'student_list', 'students.txt'), 'Ademola\nAdewale\nAdewunmi\nBola\nBolade\nBoluwatife\nDamilola\nNnamdi\nChidi\nEmeka');

// rmSync(resolve('resources', 'private', 'student_list', 'students.txt'), { recursive: true, force: true })
// renameSync(resolve('resources', 'private', 'student_list', 'students.txt'), resolve('resources', 'private', 'student_list', 'students2.txt'))
// copyFileSync(resolve('resources', 'private', 'student_list', 'students2.txt'), resolve('resources', 'private', 'student_list', 'students.txt'))
// chmodSync(resolve('resources', 'private', 'student_list', 'students2.txt'), 0o777)

let readStream = createReadStream(resolve('resources', 'private', 'texts', 'students.txt'), {highWaterMark: 100, encoding: 'utf-8'});
readStream.on('data', (chunk) => {
    console.log(chunk);
})