import React, { Component } from 'react';
//import { Link } from 'react-router-dom';
import axios from 'axios';

export default class DetailsRecord extends Component {
    constructor(props) {
        super(props);
        
        this.onEdit = this.onEdit.bind(this);

        this.state = { record: {} }
    }

    componentDidMount() {
        axios.get('http://localhost:5000/records/' + this.props.match.params.id)
            .then(res => {
                this.setState({
                    record: res.data
                })   
            })
            .catch((err) => {
                console.log(err);
            })
    }

    displayList(list) {
        return (
            <div>
                {list.map((item, index) => (
                    <p key={index}>{item}</p>
                ))}
            </div>
        )
    }
    
    displayList(list) {
        return (
            <div>
                {list.map((item, index) => (
                    <p key={index}>{item}</p>
                ))}
            </div>
        )
    };

    onEdit(e) {
        e.preventDefault();

        window.location = "/edit/" + this.props.match.params.id;
    }

    render() {
        return (
            <div>
                <h3 class="text-center">{this.state.record.firstName} {this.state.record.lastName}'s Record</h3>
                <br/>
                <p class="h4">
                    <strong>Health Insurance: </strong>{this.state.record.healthInsurance}
                </p>
                <p class="h4">
                    <strong>First Name: </strong>{this.state.record.firstName}
                </p>
                <p class="h4">
                    <strong>Last Name: </strong>{this.state.record.lastName}
                </p>
                <p class="h4">
                    <strong>Birth Date: </strong>{this.state.record.birthDate}
                </p>
                <p class="h4">
                    <strong>Address: </strong>{this.state.record.address}
                </p>
                <p class="h4">
                    <strong>City: </strong>{this.state.record.city}
                </p>
                <p class="h4">
                    <strong>State: </strong>{this.state.record.state}
                </p>
                <p class="h4">
                    <strong>ZIP Code: </strong>{this.state.record.zip}
                </p>
                <p class="h4">
                    <strong>Gender: </strong>{this.state.record.gender}
                </p>
                <p class="h4">
                    <strong>Marital Status: </strong>{this.state.record.maritalStatus}
                </p>
                <p class="h4">
                    <strong>Medical Histories: </strong>{this.state.record.medicalHistories}
                </p>
                { this.displayList(this.state.record.medicalHistories) } 
                <p class="h4">
                    <strong>Diagnoses: </strong>{this.state.record.diagnoses}
                </p> 
                <p class="h4">
                    <strong>Medications: </strong>{this.state.record.medications}
                </p> 
                <p class="h4">
                    <strong>Allergies: </strong>{this.state.record.allergies}
                </p>
                <p class="h4">
                    <strong>Immunization Dates: </strong>{this.state.record.immunizationDates}
                </p> 
                <p class="h4">
                    <strong>Lab Test Results: </strong>{this.state.record.labTestResults}
                </p>
                <br/>
                <div class="row">
                    <div class="col text-center">
                        <button type="button" class="btn btn-primary btn-lg" onClick={e => this.onEdit(e)}>Edit</button>
                    </div>
                </div>
            </div>
        )
    }
}