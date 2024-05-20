const EventEmitter = require('events');
const eventEmitter = new EventEmitter();
eventEmitter.setMaxListeners(1)

// console.log(EventEmitter)

eventEmitter.on('registered', logUser)
eventEmitter.on('registered', sendEmail)
eventEmitter.on('registered', sendSMS)

eventEmitter.on('loggedIn', greetUser)

function greetUser(data) {
    console.log('Hello', data.name);
}

function logUser(data) {
    console.log('New user registered with data:', data);
}
function sendEmail(data) {
    console.log('Send email to:', data.email);
}

function sendSMS(data) {
    console.log('Send SMS to:', data.phone);
}



eventEmitter.emit('registered', {name: 'Hameed', email: 'abdulhameed4fortune@gamil.com', phone: '08012345678'});
eventEmitter.emit('loggedIn', {name: 'Hameed', email: 'abdulhameed4fortune@gamil.com', phone: '08012345678'});
const regListeners =  EventEmitter.getEventListeners(eventEmitter, 'registered')
console.log(regListeners);