import React from 'react'; // const someModule = require(ime na modul) vo node toa e ES5 sintaksa
import { ComponentOne } from './ComponentOne';
export class MyApp extends React.Component {
  render() {
    return (
      <div id="app">
        <h2>This is my React App</h2>
        <ComponentOne />
      </div>
    )
  }
}
