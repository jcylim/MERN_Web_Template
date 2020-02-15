import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

import Navbar from "./components/navbar.component";
import RecordsList from "./components/records-list.component";
import EditRecord from "./components/edit-record.component";
import CreateRecord from "./components/create-record.component";
import CreatePatient from "./components/create-patient.component";
import DetailsRecord from "./components/details-record.component";

function App() {
  return (
    <Router>
      <div className="container">
        <Navbar />
        <br/>
        <Route path="/" exact component={RecordsList}/>
        <Route path="/edit/:id" component={EditRecord}/>
        <Route path="/create" component={CreateRecord}/>
        <Route path="/patient" component={CreatePatient}/>
        <Route path="/details/:id" component={DetailsRecord}/>
      </div>
    </Router>
  );
}

export default App;
