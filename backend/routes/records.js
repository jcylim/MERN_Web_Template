const router = require('express').Router();
let Record = require('../models/record.model');

// Default page for .../records that returns all the records in Atlas
router.route('/').get((req, res) => {
    Record.find()
        .then(records => res.json(records))
        .catch(err => res.status(400).json('Error: ' + err));
});

// Add new record to Atlas
router.route('/add').post((req, res) => {
    const healthInsurance = req.body.healthInsurance;
    const firstName = req.body.firstName;
    const lastName = req.body.lastName;
    const birthDate = req.body.birthDate;
    const address = req.body.address;
    const city = req.body.city;
    const state = req.body.state;
    const zip = req.body.zip;
    const gender = req.body.gender;
    const maritalStatus = req.body.maritalStatus;
    const medicalHistories = req.body.medicalHistories;
    const diagnoses = req.body.diagnoses;
    const medications = req.body.medications;
    const allergies = req.body.allergies;
    const immunizationDates = req.body.immunizationDates;
    const labTestResults = req.body.labTestResults;

    const newRecord = new Record({
        healthInsurance,
        firstName,
        lastName,
        birthDate,
        address,
        city,
        state,
        zip,
        gender,
        maritalStatus
    });

    newRecord.save()
        .then(() => res.json('Record added!'))
        .catch(err => res.status(400).json('Error: ' + err));
});

// Read record by object ID
router.route('/:id').get((req, res) => {
    Record.findById(req.params.id)
        .then(record => res.json(record))
        .catch(err => res.status(400).json('Error: ' + err));
});

// Delete record
router.route('/:id').delete((req, res) => {
    Record.findByIdAndDelete(req.params.id)
        .then(() => res.json('Record deleted.'))
        .catch(err => res.status(400).json('Error: ' + err));
});

// Update record
router.route('/update/:id').post((req, res) => {
    Record.findById(req.params.id)
        .then(record => {
            record.healthInsurance = req.body.healthInsurance;
            record.firstName = req.body.firstName;
            record.lastName = req.body.lastName;
            record.birthDate = req.body.birthDate;
            record.address = req.body.address;
            record.city = req.body.city;
            record.state = req.body.state;
            record.zip = req.body.zip;
            record.gender = req.body.gender;
            record.maritalStatus = req.body.maritalStatus;
            record.medicalHistories = req.body.medicalHistories;
            record.diagnoses = req.body.diagnoses;
            record.medications = req.body.medications;
            record.allergies = req.body.allergies;
            record.immunizationDates = req.body.immunizationDates;
            record.labTestResults = req.body.labTestResults;

            record.save()
                .then(() => res.json('Record updated!'))
                .catch(err => res.status(400).json('Error: ' + err));
        })
        .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;