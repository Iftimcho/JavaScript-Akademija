import React from 'react';
import { Hello } from './Hello';
import { Goodbye } from './Goodbye';
export default function AppFunc() { // poradi ova default tamu kaj so ke ja importirame komponentata ke ja importirame bez zagradi
    return (
        <div id="app-function">
            <h2>Functional Components Rock!</h2>
            <Hello />
            <h2>Functional Components Rock!</h2>
            <Hello />
            <Goodbye />
            <p id="calculate">
                The result from 5 + 3 = {5+3}
            </p>
        </div>
    )
}