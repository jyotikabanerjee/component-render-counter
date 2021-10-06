import React from 'react';
// import PropTypes from 'prop-types';

const Persons  = ({data}) => {
        console.log('Persons data received...');
        console.log(data);
        return (
            <div className={`mt-10 mb-0 ml-auto mr-auto`}>
                Hello, these are the person's details
                <div className={`w-96 mt-2 mb-0 ml-auto mr-auto`}>
                    {data && data.data && data.data.map((person) => {
                        return (
                            <div key={person.name} className={`mt-2 border-solid border-2 border-light-gray-200`}>
                                <ul>
                                    <li> Name : {person.name} </li>
                                    <li> Profession : {person.profession}</li>
                                    <li> Location : {person.location} </li>
                                    <li> ZIP : {person.ZIP}</li>
                                    <li> Gender : {person.gender}</li>
                                </ul>

                            </div>
                        )
                    })}
                </div>
            </div>
        );

};

export default Persons;