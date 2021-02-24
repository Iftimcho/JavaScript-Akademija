import React, { useState } from 'react';
import {Switch, Route} from 'react-router-dom';

import {Nav} from './Nav';
import {About} from './About';
import {Contact} from './Contact';
// import {ShowDates} from './ShowDates';
import {Home} from './Home';
export function App() {

  
  const [status, setStatus] = useState(true);
  


  function toggleButton() {
    setStatus(!status);
  }
  return (
    <div id="app">
      <h2>Domasna Recap na toa so sme go rabotele do sega</h2>
      <Nav />
      <Switch>
        <Route path="/home" component={Home}/>
        <Route path="/about" component={About}/>
        <Route path="/contact" render={() => {
            return <Contact setStatus={toggleButton} status={status}/>
        }}/>
      </Switch>

      
      <br/>
      <br/>
    
    </div>
  );
}

export default App;
