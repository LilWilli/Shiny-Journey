const EventEmitter = require("events");

class User extends EventEmitter {
    constructor(name, email) {
        super();
        this.name = name;
        this.email = email;
        this.on('registered', logUser);
        this.on('registered', sendEmail);
        this.on('registered', sendSMS);
    }

    register() {
        console.log('Running register()...');
        this.emit('registered', this);
    }
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

module.exports = User;