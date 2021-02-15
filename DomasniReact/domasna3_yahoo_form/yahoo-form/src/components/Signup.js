import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';

export function Signup() {
    
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [phone, setPhone] = useState('');
    const [month, setMonth] = useState('');
    const [day, setDay] = useState('');
    const [year, setYear] = useState('');
    const [gender, setGender] = useState('');
    const [person, setPerson] = useState({});
    
    function sendValues() {
        let person = {
            first: firstName,
            last: lastName,
            mail: email,
            pwd: password,
            phoneNumber: phone,
            monthOfBirth: month,
            dayOfBirth: day,
            birthYear: year,
            gen: gender
        };
        setPerson(person);
        // console.log(data);
    }
    const signup = {
        width: '450px',
        textAlign: 'center',
        margin: 'auto',
        border: '1px solid grey transparent',
        borderTop: '1px solid #f1f1f5',
        padding: '15px',
        boxShadow: '0 2px 4px 0 rgba(0,0,0,.3)'
    };
    const border = {
        borderRadius: '5px'
    }
    return(
        <div id="signup" style={signup}>
            <div id="info">
                <h4>Sign up for Yahoo Mail</h4>
                <h5>Create a Yahoo email address</h5>
            </div>
            <form onSubmit={sendValues}>
                <div className="row">
                    <div className="col"><input className="form-control border-top-0 border-left-0 border-right-0" type="text" value={firstName} placeholder="First name" onChange={ (e) => setFirstName(e.target.value) } /></div>
                    <div className="col"><input className="form-control border-top-0 border-left-0 border-right-0" type="text" value={lastName} placeholder="Last name" onChange={ (e) => setLastName(e.target.value) } /> </div>
                </div>
                <div className="form-group">
                    <input className="form-control border-top-0 border-left-0 border-right-0" type="email" value={email} placeholder="Email address @yahoo.com" onChange={ (e) => setEmail(e.target.value) } /> 
                </div>
                <div className="form-group">
                    <input className="form-control border-top-0 border-left-0 border-right-0" type="password" value={password} placeholder="Password" onChange={ (e) => setPassword(e.target.value) } />  
                </div>
                <div className="form-group">
                    <input className="form-control border-top-0 border-left-0 border-right-0" type="text" value={phone} placeholder="Mobile phone number" onChange={ (e) => setPhone(e.target.value) } /> 
                </div>
                <div className="row">
                    <div className="col"><input className="form-control border-top-0 border-left-0 border-right-0" type="text" value={month} placeholder="Birth Month" onChange={ (e) => setMonth(e.target.value) } /></div>
                    <div className="col"><input className="form-control border-top-0 border-left-0 border-right-0" type="text" value={day} placeholder="Day" onChange={ (e) => setDay(e.target.value) } /></div>
                    <div className="col"><input className="form-control border-top-0 border-left-0 border-right-0" type="text" value={year} placeholder="Year" onChange={ (e) => setYear(e.target.value) } /> </div>
                </div>
                <div className="form-group">
                    <input className="form-control border-top-0 border-left-0 border-right-0" type="text" value={gender} placeholder="Gender" onChange={ (e) => setGender(e.target.value) } />
                </div>
                <p>By clicking "Continue", you agree to the <a href="#">Terms</a></p>                
                <p>and <a href="#">Privacy Policy</a></p>
                <button className="btn btn-primary btn-block">Continue</button>
                <div>
                    Already have an account? <a href="#">Sign in</a>
                </div>
            </form>
            <p>{person.first}</p>
        </div>
    )
}