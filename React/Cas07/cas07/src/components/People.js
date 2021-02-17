import React from 'react';
import PropTypes from 'prop-types';

export function People(props) {
    console.log(props);
    return(
        <div id="people">
            <table border="2">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Lastname</th>
                        <th>Birth Year</th>
                        <th colSpan="2">Action</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        props.people.map((person,i) => {
                            return(
                            <tr key={i}>
                                <td>{person.id}</td>
                                <td>{person.name}</td>
                                <td>{person.lastName}</td>
                                <td>{person.year}</td>
                                <td>
                                    <button onClick={() => {props.deletePerson(person)}}>Delete</button>
                                </td>
                                <td>
                                    <button type="submit" onClick={() => {props.editPerson(person)}}>Edit</button>
                                </td>
                            </tr>
                        )})
                    }
                </tbody>
            </table>
        </div>
    )
};

People.propTypes = {
    people: PropTypes.array.isRequired,
    deletePerson: PropTypes.func,
    editPerson: PropTypes.func
}