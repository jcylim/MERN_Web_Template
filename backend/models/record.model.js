const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const recordSchema = new Schema({
    healthInsurance: { type: String, required: true },
    firstName: { type: String, required: true }, 
    lastName: { type: String, required: true }, 
    birthDate: { type: String, required: true },
    address: { type: String, required: true },
    city: { type: String, required: true },
    state: { type: String, required: true },
    zip: { type: String, required: true },  
    gender: { type: String, required: true },
    maritalStatus: { type: String, required: true },
    medicalHistories: { type: [String], required: true },
    diagnoses: { type: [String], required: true },
    medications: { type: [String], required: true },
    allergies: { type: [String], required: true },
    immunizationDates: { type: [String], required: true },
    labTestResults: { type: [String], required: true }
}, {
    timestamps: true
});

const Record = mongoose.model('Record', recordSchema);

module.exports = Record; 