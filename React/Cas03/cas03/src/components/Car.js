import React from 'react';
import PropTypes from 'prop-types';

export function Car(props) {
    console.log(props);
    return(
        <div id="car">
            <h2>Car component</h2>
            <table border="1">
                <thead>
                    <tr>
                        <th>Brand</th>
                        <th>Model</th>
                        <th>Year</th>
                        <th>City</th>
                        <th>Plates</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        props.vozila.map((vozilo,i) => {
                            return(
                            <tr key={i}>
                                <td>{ vozilo.brand }</td>
                                <td>{ vozilo.model }</td>
                                <td>{ vozilo.year }</td>
                                <td>{ vozilo.plates.grad }</td>
                                <td>{ vozilo.plates.oznaka }</td>
                            </tr>
                            )
                        })

                    }
                </tbody>
            </table>
        </div>
    )
}

Car.propTypes = {
    vozila: PropTypes.array.isRequired
}