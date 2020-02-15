import React, { Component } from 'react';
import axios from 'axios';

export default class CreateRecord extends Component {
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
            patients: [],
            stateList: ['AL', 'AK', 'AZ', 'AR', 'CA', 'CO', 'CT', 'DE', 'FL', 'GA', 'HI', 'ID', 'IL', 'IN', 'IA', 'KS', 'KY', 'LA', 'ME', 'MD', 'MA', 'MI', 'MN'
                , 'MS', 'MO', 'MT', 'NE', 'NV', 'NH', 'NJ', 'NM', 'NY', 'NC', 'ND', 'OH', 'OK', 'OR', 'PA', 'RI', 'SC', 'SD', 'TN', 'TX', 'UT', 'VT', 'VA', 'WA'
                , 'WV', 'WI', 'WY'
            ]
        }
    }

    componentDidMount() {
        axios.get('http://localhost:5000/patients/')
            .then(res => {
                if (res.data.length > 0) {
                    this.setState({
                        patients: res.data.map(patient => patient.patientName),
                        patientName: res.data[0].patientName
                    })
                }
            })
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
            maritalStatus: this.state.maritalStatus
        }

        console.log(record);
        
        axios.post('http://localhost:5000/records/add', record)
            .then(res => console.log(res.data));

        window.location = '/';
    }

    render() {
        return (
            <div>
                <h3>Create New Record Log</h3>
                <form onSubmit={this.onSubmit}>
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
                            <select name="state"
                                required  
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
                    <div className="form-group col text-center">
                    <input type="submit" value="Create Record" className="btn btn-primary" />
                    </div>
                </form>
            </div>
        )
    }
}