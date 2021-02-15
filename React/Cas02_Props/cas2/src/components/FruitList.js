import React from 'react';

export function FruitList(props) {
    console.log(props);
    return(
       <ul>
           {props.listOfFruits.map((fruit, index) => {
               return(
                   <li key={index}>
                       { fruit }
                   </li>
               )
           })}
       </ul>
    )
}