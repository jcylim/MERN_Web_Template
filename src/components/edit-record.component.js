import React, { Component } from 'react';
import axios from 'axios';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

export default class EditRecord extends Component {
    constructor(props) {
        super(props);

        this.onChangeHealthInsurance = this.onChangeHealthInsurance.bind(this);
        this.onChangeFirstName = this.onChangeFirstName.bind(this);
        this.onChangeLastName = this.onChangeLastName.bind(this);
        this.onChangeBirthDate = this.onChangeBirthDate.bind(this);
        this.onChangeAddress = this.onChangeAddress.bind(this);
        this.onChangeCity = this.onChangeCity.bind(this);
        this.onChangeState = this.onChangeState.bind(this);
        this.onChangeZip = this.onChangeZip.bind(this);
        this.onChangeGender = this.onChangeGender.bind(this);
        this.onChangeMaritalStatus = this.onChangeMaritalStatus.bind(this);
        this.addMedicalHistory = this.addMedicalHistory.bind(this);
        this.addDiagnosis = this.addDiagnosis.bind(this);
        this.addMedication = this.addMedication.bind(this);
        this.addAllergy = this.addAllergy.bind(this);
        this.addImmunizationDate = this.addImmunizationDate.bind(this);
        this.addLabTestResult = this.addLabTestResult.bind(this);
        this.onChangeValue = this.onChangeValue.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

        this.state = {
            healthInsurance: '',
            firstName: '',
            lastName: '',
            birthDate: '',
            address: '',
            city: '',
            state: '',
            zip: '',
            gender: '',
            maritalStatus: '',
            medicalHistories: [],
            diagnoses: [],
            medications: [],
            allergies: [],
            immunizationDates: [],
            labTestResults: [],
            input: '',
            date: new Date(),
            stateList: ['AL', 'AK', 'AZ', 'AR', 'CA', 'CO', 'CT', 'DE', 'FL', 'GA', 'HI', 'ID', 'IL', 'IN', 'IA', 'KS', 'KY', 'LA', 'ME', 'MD', 'MA', 'MI', 'MN'
                , 'MS', 'MO', 'MT', 'NE', 'NV', 'NH', 'NJ', 'NM', 'NY', 'NC', 'ND', 'OH', 'OK', 'OR', 'PA', 'RI', 'SC', 'SD', 'TN', 'TX', 'UT', 'VT', 'VA', 'WA'
                , 'WV', 'WI', 'WY'
            ]
        }
    }

    componentDidMount() {
        axios.get('http://localhost:5000/records/' + this.props.match.params.id)
            .then(res => {
                this.setState({
                    healthInsurance: res.data.healthInsurance,
                    firstName: res.data.firstName,
                    lastName: res.data.lastName,
                    birthDate: res.data.birthDate,
                    address: res.data.address,
                    city: res.data.city,
                    state: res.data.state,
                    zip: res.data.zip,
                    gender: res.data.gender,
                    maritalStatus: res.data.maritalStatus,
                    medicalHistories: res.data.medicalHistories,
                    diagnoses: res.data.diagnoses,
                    medications: res.data.medications,
                    allergies: res.data.allergies,
                    immunizationDates: res.data.immunizationDates,
                    labTestResults: res.data.labTestResults
                })   
            })
            .catch((err) => {
                console.log(err);
            })

        /*axios.get('http://localhost:5000/patients/')
            .then(res => {
                if (res.data.length > 0) {
                    this.setState({
                        patients: res.data.map(patient => patient.patientName)
                    })
                }
            })*/
    }

    onChangeHealthInsurance(e) {
        this.setState({
            healthInsurance: e.target.value
        });
    }

    onChangeFirstName(e) {
        this.setState({
            firstName: e.target.value
        });
    }

    onChangeLastName(e) {
        this.setState({
            lastName: e.target.value
        });
    }

    onChangeBirthDate(e) {
        this.setState({
            birthDate: e.target.value
        });
    }

    onChangeAddress(e) {
        this.setState({
            address: e.target.value
        });
    }

    onChangeCity(e) {
        this.setState({
            city: e.target.value
        });
    }

    onChangeState(e) {
        this.setState({
            state: e.target.value
        });
    }

    onChangeZip(e) {
        this.setState({
            zip: e.target.value
        });
    }

    onChangeGender(e) {
        this.setState({
            gender: e.target.value
        });
    }

    onChangeMaritalStatus(e) {
        this.setState({
            maritalStatus: e.target.value
        });
    }

    onChangeValue(e) {
        e.preventDefault();

        this.setState({
            input: e.target.value
        });
    }

    addMedicalHistory(e) {
        e.preventDefault();
        this.setState(prevState => ({
            medicalHistories: [...prevState.medicalHistories, this.state.input]
        }));
    }

    addDiagnosis(e) {
        e.preventDefault();
        this.setState(prevState => ({
            diagnoses: [...prevState.diagnoses, this.state.input]
        }));
    }
    
    addMedication(e) {
        e.preventDefault();
        this.setState(prevState => ({
            medications: [...prevState.medications, this.state.input]
        }));
    }

    addAllergy(e) {
        e.preventDefault();
        this.setState(prevState => ({
            allergies: [...prevState.allergies, this.state.input]
        }));
    }

    addImmunizationDate(date) {
        var dateString = date.toISOString().slice(0,10);
        this.setState({
            date: date,
            immunizationDates: this.state.immunizationDates.concat([dateString])
        });
        console.log(this.state.immunizationDates);
    }

    addLabTestResult(e) {
        e.preventDefault();
        this.setState( prevState => ({
            labTestResults: [...prevState.labTestResults, this.state.input]
        }));
    }

    onSubmit(e) {
        e.preventDefault();

        const record = {
            healthInsurance: this.state.healthInsurance,
            firstName: this.state.firstName,
            lastName: this.state.lastName,
            birthDate: this.state.birthDate,
            address: this.state.address,
            city: this.state.city,
            state: this.state.state,
            zip: this.state.zip,
            gender: this.state.gender,
            maritalStatus: this.state.maritalStatus,
            medicalHistories: this.state.medicalHistories,
            diagnoses: this.state.diagnoses,
            medications: this.state.medications,
            allergies: this.state.allergies,
            immunizationDates: this.state.immunizationDates,
            labTestResults: this.state.labTestResults
        }

        console.log(record);
        
        axios.post('http://localhost:5000/records/update/' + this.props.match.params.id, record)
            .then(res => console.log(res.data));

        window.location = '/';
    }

    // display new elements added to arrays
    displayList(list) {
        return (
            <div>
                {list.map((item, index) => (
                    <p key={index}>{item}</p>
                ))}
            </div>
        )
    }

    render() {
        return (
            <div>
                <h3>Edit Record</h3>
                <form>
                    <div className="form-group"> 
                        <label>Health Insurance: </label>
                        <input  type="text"
                            required
                            className="form-control"
                            value={this.state.healthInsurance}
                            onChange={this.onChangeHealthInsurance}
                            />
                    </div>
                    <div class="form-row">
                        <div className="form-group col-md-4"> 
                            <label>First Name: </label>
                            <input  type="text"
                                required
                                className="form-control"
                                value={this.state.firstName}
                                onChange={this.onChangeFirstName}
                                />
                        </div>
                        <div className="form-group col-md-4"> 
                            <label>Last Name: </label>
                            <input  type="text"
                                required
                                className="form-control"
                                value={this.state.lastName}
                                onChange={this.onChangeLastName}
                                />
                        </div>
                        <div className="form-group col-md-4"> 
                            <label>Birth Date: </label>
                            <input  type="text"
                                required
                                className="form-control"
                                placeholder="E.g. 10/21/1997"
                                value={this.state.birthDate}
                                onChange={this.onChangeBirthDate}
                                />
                        </div>
                    </div>
                    <div className="form-group">
                    <label>Address: </label>
                        <input 
                            type="text" 
                            className="form-control"
                            placeholder="E.g. 123 JonsBuff St."
                            value={this.state.address}
                            onChange={this.onChangeAddress}
                            />
                    </div>
                    <div class="form-row">
                        <div className="form-group col-md-6"> 
                            <label>City: </label>
                            <input  type="text"
                                required
                                className="form-control"
                                value={this.state.city}
                                onChange={this.onChangeCity}
                                />
                        </div>
                        <div className="form-group col-md-4"> 
                            <label>State: </label>
                            <select required name="state"  
                                class="form-control"
                                value={this.state.state}
                                onChange={this.onChangeState}>
                                {
                                    this.state.stateList.map(state => {
                                        return <option
                                            key={state}
                                            value={state}>{state}
                                        </option>    
                                    })
                                }
                            </select>
                        </div>
                        <div className="form-group col-md-2"> 
                            <label>Zip: </label>
                            <input  type="text"
                                required
                                className="form-control"
                                value={this.state.zip}
                                onChange={this.onChangeZip}
                                />
                        </div>
                    </div>
                    <div class="form-row">
                        <div className="form-group col-md-6">
                            <label>Gender: </label>
                            <select required name="gender" 
                                id="gender" 
                                class="form-control"
                                value={this.state.gender}
                                onChange={this.onChangeGender}>
                                <option value="Male">Male</option>
                                <option value="Female">Female</option>
                            </select>
                        </div>
                        <div className="form-group col-md-6">
                            <label>Marital Status: </label>
                            <input 
                                type="text" 
                                className="form-control"
                                value={this.state.maritalStatus}
                                onChange={this.onChangeMaritalStatus}
                                />
                        </div>
                    </div>
                    <div class="form-row">
                        <div className="form-group col-md-6">
                            <label>Medical Histories: </label>
                            <div class="form-row align-items-center">
                                <div class="col-md">
                                <input type="text" class="form-control mb-2" id="inlineFormInput" onChange={this.onChangeValue}/>
                                </div>
                                <div class="col-auto">
                                <button class="btn btn-primary mb-2" onClick={this.addMedicalHistory}>Add</button>
                                </div>
                            </div>
                            { this.displayList(this.state.medicalHistories) }
                        </div>
                        <div className="form-group col-md-6">
                        <label>Diagnoses: </label>
                        <div class="form-row align-items-center">
                            <div class="col-md">
                                <input type="text" class="form-control mb-2" id="inlineFormInput" onChange={this.onChangeValue}/>
                                </div>
                                <div class="col-auto">
                                <button type="submit" class="btn btn-primary mb-2" onClick={this.addDiagnosis}>Add</button>
                                </div>
                            </div>
                            { this.displayList(this.state.diagnoses) }
                        </div>
                    </div>
                    <div class="form-row">
                        <div class="form-group col-md-6">
                        <label>Medications: </label>
                        <div class="form-row align-items-center">
                            <div class="col-md">
                                <input type="text" class="form-control mb-2" id="inlineFormInput" onChange={this.onChangeValue}/>
                                </div>
                                <div class="col-auto">
                                <button type="submit" class="btn btn-primary mb-2" onClick={this.addMedication}>Add</button>
                                </div>
                            </div>
                            { this.displayList(this.state.medications) }
                        </div>
                        <div class="form-group col-md-6">
                            <label>Allergies: </label>
                            <div class="form-row align-items-center">
                                <div class="col-md">
                                <input type="text" class="form-control mb-2" id="inlineFormInput" placeholder="E.g. Peanuts" onChange={this.onChangeValue}/>
                                </div>
                                <div class="col-auto">
                                <button type="submit" class="btn btn-primary mb-2" onClick={this.addAllergy}>Add</button>
                                </div>
                            </div>
                            { this.displayList(this.state.allergies) }
                        </div>
                    </div>
                    <div class="form-row">
                        <div class="form-group col-md-4">
                            <label>Immunization Dates: </label>
                            <div class="form-row align-items-center">
                                <div class="col-auto">
                                    <div>
                                        <DatePicker
                                            selected={this.state.date}
                                            onChange={this.addImmunizationDate}
                                        />
                                    </div>
                                </div>
                            </div>
                            { this.displayList(this.state.immunizationDates) }
                        </div>
                        <div class="form-group col-md-8">
                            <label>Lab Test Results: </label>
                            <div class="form-row align-items-center">
                                <div class="col-md">
                                <input type="text" class="form-control mb-2" id="inlineFormInput" onChange={this.onChangeValue}/>
                                </div>
                                <div class="col-auto">
                                <button type="submit" class="btn btn-primary mb-2" onClick={this.addLabTestResult}>Add</button>
                                </div>
                            </div>
                            { this.displayList(this.state.labTestResults) }
                        </div>
                    </div>
                    <br/>
                    <div className="form-group col text-center">
                    <button type="submit" className="btn btn-primary" onClick={this.onSubmit}>Edit Record</button>
                    </div>
                </form>
            </div>
        )
    }
}