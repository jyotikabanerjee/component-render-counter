
import React from 'react';
import './App.css';
import Persons from './Persons';
import withRenderCtr from "./withRenderCtr";

function App() {
    const PersonsData = [
        {
            id: 1,
            name : 'Jane Doe',
            profession : 'Software Engineer',
            location : 'California',
            ZIP : '94040',
            gender : 'Female'
        },
        {
            id: 1,
            name : 'John Doe',
            profession : 'Architect',
            location : 'New Jersey',
            ZIP : '08876',
            gender : 'Male'
        },
        {
            id: 1,
            name : 'Jack Black',
            profession : 'Lawyer',
            location : 'Washington',
            ZIP : '98101',
            gender : 'Male'
        }
    ];
    const EnhancedPersons = withRenderCtr(Persons, PersonsData);

    return (
    <div className="App">
      <div>
          <EnhancedPersons/>
      </div>
    </div>
  );
}

export default App;
