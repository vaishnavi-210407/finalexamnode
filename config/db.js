const mongoose  = require('mongoose');

const database = async() => {
    try {
        await mongoose.connect('mongodb://localhost:27017');
        console.log('database connected');
    } catch(error) {
        console.log('database not connected');
    }
}

module.exports = database;