import React, { useState, useEffect } from 'react';
import {Input} from './Input';
export function Login(){
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [inputType, setInputType] = useState('password');
    // nareden cas domasna
    const [showComment, setShowComment] = useState(false);
    // Proverka dali vnesuvame se kako so treba
    //useEffect(() => {
    //     console.log(username);
    //     console.log(password);
    // }, [username, password]);

    function setToggle () {
        console.log(`Input type is ${inputType}`);
        setInputType(
            inputType === 'password' ? 'text' : 'password'
        )
    };

    function handleSubmit(e) {
        e.preventDefault();
        alert(`Username: ${username} \n Password: ${password} `);
    }
    return(
        <div id="login">
            <h2>Login</h2>
            <br/>
            <form onSubmit={handleSubmit}>
                <Input type="text" name="username" placeholder="enter username" value={username} onChange={e=>{setUsername(e.target.value)}}/>
                <br/>
                <Input type={inputType} name="password" placeholder="enter password" value={password} onChange={e => setPassword(e.target.value)} toggle={setToggle} 
                showComment={showComment} toggleComment={() => setShowComment(!showComment)}/>
                <br/>
                <button className="action-button">Login</button>
            </form>
        </div>
    )
}

