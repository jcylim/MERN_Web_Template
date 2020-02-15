import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

// functional component 
const Record = props => (
    <tr>
        <td>{props.record.healthInsurance}</td>
        <td>{props.record.firstName} {props.record.lastName}</td>
        <td>{props.record.birthDate}</td>
        <td>{props.record.gender}</td>
        <td>{props.record.maritalStatus}</td>
        <td>{props.record.address}, {props.record.city}, {props.record.state} {props.record.zip}</td>
        <td>
            <Link to={"/details/" + props.record._id}>Details</Link> | <a href="#" onClick={() => { props.deleteRecord(props.record._id) }}>Delete</a>
        </td>
    </tr>
)

export default class RecordsList extends Component {
    constructor(props) {
        super(props);

        this.deleteRecord = this.deleteRecord.bind(this)

        this.state = {
            records: []
        };
    }

    componentDidMount() {
        axios.get('http://localhost:5000/records/')
            .then(res => {
                this.setState({ 
                    records: res.data 
                })
            })
            .catch((err) => {
                console.log(err);
            })
    }

    deleteRecord(id) {
        axios.delete('http://localhost:5000/records/' + id)
            .then(res => { 
                console.log(res.data)
            });

        this.setState({
            records: this.state.records.filter(el => el._id !== id)
        })
    }

    recordsList() {
        return this.state.records.map(currentRec => {
            return <Record record={currentRec} deleteRecord={this.deleteRecord} key={currentRec._id}/>;
        })
    }

    render() {
        return (
            <div>
                <h3>Logged Records</h3>
                <table className="table">
                <thead className="thead-light">
                    <tr>
                    <th>Health Insurance</th>
                    <th>Patient Name</th>
                    <th>Patient Birth Date</th>
                    <th>Patient Gender</th>
                    <th>Patient Marital Status</th>
                    <th>Patient Address</th>
                    <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    { this.recordsList() }
                </tbody>
                </table>
            </div>
        )
    }
}