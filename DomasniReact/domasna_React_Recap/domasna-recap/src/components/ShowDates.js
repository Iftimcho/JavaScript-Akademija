import React from 'react';
import PropTypes from 'prop-types';

export function ShowDates(props) {
    console.log(props);
    return(
        <div id="show-dates">
            { props.dates.length > 0 ?
                <table border="2">
                    <thead>
                        <tr>
                            <th>Day</th>
                            <th>Month</th>
                            <th>Year</th>
                            <th>Delete</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            props.dates.map((date, i) => {
                                return(
                                    <tr key={i}>
                                        <td>{date.day}</td>
                                        <td>{date.month}</td>
                                        <td>{date.year}</td>
                                        <td><button onClick={() => {props.deleteDate(date)}}>Delete</button></td>
                                    </tr>
                                )
                            })
                        }
                        
                    </tbody>
                </table>
                : null
            }
        </div>
    )
}

ShowDates.propTypes = {
    dates: PropTypes.array.isRequired,
    deleteDate: PropTypes.func
}