import React, { useState, useEffect } from 'react';

export function App() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [count, setCount] = useState(0);
  // function usernameValueTracker(event) {
  //   console.log(event);
  //   setUsername(event.target.value);
  // }

  function passwordTracker(event) {
    setPassword(event.target.value);
  }

  // useEffect(() => {
  //   console.log('This is componentDidMount replacement');
  // }, []);

  useEffect(() => { // sega useEffect ima uloga na componentDidUpdate()
    console.log(username);
    console.log(password);
  }, [username, password]);
  
  function prikaziVrednosti() {
    alert(`Username: ${username} \n Password: ${password}\n Counter: ${count}`);
  }
  return(
    <div id="app">
      <h1>STATE in React - Functional Component</h1>
      Username: <input 
        type="text"
        placeholder="enter username"
        value={username}
        // onChange={usernameValueTracker}
        onChange={(e) => {setUsername(e.target.value)}} // mnogu poednostaveno
      /> 
      <br/>
      Password: <input 
        type="password"
        placeholder="enter password"
        value={password}
        onChange={passwordTracker} // kaj username e mnogu poednostavno napisano, no raboti i vaka za toa go ostavam
      />
      <br/>
      <br/>
      <h2>Counter: {count}</h2>
      <img width="700" height="500" 
        src="https://img.fifa.com/image/upload/t_l1/dq6tczszvf4ebburt5b8.jpg"
        onClick={() => {setCount(count + 1)}}
      />
      <br/>
      <br/>
      <button onClick={prikaziVrednosti}>Show Values</button>
      <h3>Username: {username}</h3>
      <h4>Password: {password}</h4>
    </div>
  )
}