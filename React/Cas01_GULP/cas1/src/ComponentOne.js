import React from 'react';
import { ComponentTwo } from './ComponentTwo';
export function ComponentOne() {
    return(
        <div id="componentOne">
            <h1>
                This is Component One
            </h1>
            <h4>
                Started Learning React.
            </h4>
            <ComponentTwo />
        </div>
    )
}