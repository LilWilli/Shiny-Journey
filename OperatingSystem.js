//Check on the operating system of the device currently being used

const os = require('os');
console.log(os);
//To check about info based on the current user
const user = os.userInfo();
console.log(user);

//method returns the system uptime in seconds
console.log(`The system Uptime is ${os.uptime()} seconds`);
const currentOS = {
    name: os.type(),
    release: os.release(),
    totalMem: os.totalmem(),
    freeMem: os.freemem(),
bit:  os.arch(), // x64
platform: os.platform(), // win32
break: os.EOL, // \r\n
hotsname: os.hostname(), // HAMEED-PC
type: os.type(), // Windows_NT
Uptime: os.uptime() // time in seconds since the computer has been started
}
console.log(currentOS);