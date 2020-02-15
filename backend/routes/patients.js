const router = require('express').Router();
let Patient = require('../models/patient.model');

// Default page for .../patients that returns all the patients in Atlas
router.route('/').get((req, res) => {
    Patient.find()
        .then(patients => res.json(patients))
        .catch(err => res.status(400).json('Error: ' + err));
});

// Add new patient to Atlas
router.route('/add').post((req, res) => {
    const patientName = req.body.patientName;

    const newPatient = new Patient({patientName});

    newPatient.save()
        .then(() => res.json('Patient added!'))
        .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;