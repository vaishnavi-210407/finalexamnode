const mongoose = require('mongoose');

const attendenceModel = new mongoose.Schema({
    facultyId: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: "Faculty",
        unique: true
    },
    date: {
        type: String,
        required: true
    },
    status: {
        type: String,
        enum: ['Present', 'Absent'],
        required: true
    },
});

module.exports = mongoose.model('Attendence', attendenceModel);