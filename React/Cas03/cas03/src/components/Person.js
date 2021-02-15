import React from 'react';
import PropTypes from 'prop-types';

export function Person(props) {
    console.log(props);
    return(
        <div id="person">
            <h1>Persons</h1>
            <ul>
            {
                props.persons.map((person, i) => {
                    return (
                        <li key={ i }>
                            <p>FirstName: { person.person.firstName } </p>
                            <p>LastName: { person.person.lastName } </p>
                            <h5>Address: </h5>
                            <ul>
                            {
                                Object.entries(person.person.address).map((element, it) => {
                                    console.log(person.person.address);
                                    return(
                                    <li key={it}>
                                        <p>Street:{ element.street }</p>
                                        <p>Number:{ element.number }</p>
                                        <p>City:{ element.city }</p>
                                        <p>Zipcode:{ element.zipCode }</p>
                                    </li>
                                    )
                                })
                                // <p>Street: { person.person.address.street } </p>
                                // <p>Number: { person.person.address.number } </p>
                                // <p>City: { person.person.address.city } </p>
                                // <p>Zipcode: { person.person.address.zipCode } </p>
                            }
                            </ul>
                            <p>Phone: { person.person.phone }</p>
                            <p>Employment: { person.person.employment }</p>
                            <p>DoB: { person.datum }</p>
                        </li>
                    )
                })
            }
            </ul>
        </div>
    )
}

Person.propTypes = {
    persons: PropTypes.array.isRequired,
}