import React from 'react';

export function Component(props) {
    console.log(props);
    return(
        <div id="component">
            <h2>Component component :D </h2>
            {
                props.prikaziPrv === true ?
                <div>
                    <p>Name: { props.korisnik1.firstName }</p>
                    <p>Last Name:{ props.korisnik1.lastName }</p>
                    <p>Age:{ props.korisnik1.age }</p>
                </div> 
                :
                <div>
                     <h3>Name:{ props.korisnik2.firstName }</h3>
                     <h3>Last Name:{ props.korisnik2.lastName }</h3>
                     <h3>Age:{ props.korisnik2.age }</h3>
                </div>
            }

            <h2>Adult user is:</h2>
            {
                props.korisnik1.adult && <h4>{props.korisnik1.firstName} is an adult.</h4>
            }
            {
                props.korisnik2.adult && <h4>{props.korisnik2.firstName} is adult.</h4>
            }
        </div>
    )
}