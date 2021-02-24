import React from 'react';
import PropTypes from 'prop-types';

export function Contact(props) {
    console.log(props);
    return(
        <div id="contact">
            {
                props.status && props.status === true ?
            <div>
            <form>
                <label htmlFor="student-id">First Name:</label>
                <input type="text" placeholder="Enter first name" /> 
                <br/>
                <label htmlFor="city">Last Name:</label>
                <input type="text" placeholder="Enter last name" /> 
                <br/>
                <label htmlFor="birth">Address:</label>
                <input type="text" placeholder="Enter address" /> 
                <br/>
            </form> 
            <button onClick={()=>{props.setStatus()}}>Disable</button>
            </div>
            :
            <div>
            <form>
                <label htmlFor="student-id">First Name:</label>
                <input type="text" disabled placeholder="Enter first name" /> 
                <br/>
                <label htmlFor="city">Last Name:</label>
                <input type="text" disabled placeholder="Enter last name" /> 
                <br/>
                <label htmlFor="birth">Address:</label>
                <input type="text" disabled placeholder="Enter address" /> 
                <br/>
            </form>
            <button onClick={() => {props.setStatus()}}>Enable</button>
            </div>
        }
        </div>
    )
}

Contact.propTypes = {
    setStatus: PropTypes.func,
    status: PropTypes.bool
}