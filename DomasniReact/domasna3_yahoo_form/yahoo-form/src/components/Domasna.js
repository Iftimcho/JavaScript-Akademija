import { func } from 'prop-types';
import React, {useState} from 'react';

export function Domasna() {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [mobile, setMobile] = useState('');
    const [DOB, setDOB] = useState('');
    const [gender, setGender] = useState('');
    const [showTable, setShowTable] = useState(false);

    function showValues(e) {
        e.preventDefault();
        // setShowTable(true);
        setShowTable(!showTable);
    }
    return (
        <div id="domasna">
            <h1>Yahoo Form</h1>
            <form onSubmit={showValues}>
                <input 
                    type="text"
                    placeholder="Enter first name"
                    value={firstName}
                    onChange={e => {setFirstName(e.target.value)}}
                />
                <br/>
                <br/>
                <input 
                    type="text"
                    placeholder="Enter last name"
                    value={lastName}
                    onChange={e => {setLastName(e.target.value)}}
                />
                <br />
                <br />
                <input 
                    type="email"
                    placeholder="Enter email"
                    value={email}
                    onChange={e => {setEmail(e.target.value)}}
                />
                <br/>
                <br/>
                <input 
                    type="password"
                    placeholder="Enter password"
                    value={password}
                    onChange={e => {setPassword(e.target.value)}}
                />
                <br/>
                <br/>
                <input 
                    type="tel"
                    placeholder="07x-xxx-xxx"
                    pattern="[0-9]{3}-[0-9]{3}-[0-9]{3}"
                    value={mobile}
                    onChange={e => {setMobile(e.target.value)}}
                />
                <br/>
                <br/>
                <input 
                    type="date"
                    placeholder="Enter DOB"
                    value={DOB}
                    onChange={e => {setDOB(e.target.value)}}
                />
                <br/>
                <br/>
                <input 
                    type="text"
                    placeholder="Enter gender"
                    value={gender}
                    onChange={e => {setGender(e.target.value)}}
                />
                <button type="submit">{showTable ? "Hide Values" : "Show Values" } </button>
            </form>

            {
                showTable && <table border="1">
                <thead>
                <tr>
                    <th>First Name</th>
                    <th>Last Name</th>
                    <th>Email</th>
                    <th>Password</th>
                    <th>Tel</th>
                    <th>DOB</th>
                    <th>Gender</th>
                </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>{firstName}</td>
                        <td>{lastName}</td>
                        <td>{email}</td>
                        <td>{password}</td>
                        <td>{mobile}</td>
                        <td>{DOB}</td>
                        <td>{gender}</td>
                    </tr>
                </tbody>
            </table>
            }
            
            <br/>
            <br/>
        </div>
    )
}