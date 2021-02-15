import React from 'react';

export function Domasna(props){
    console.log(props);
    return(
        <div id="domasna">
            <h2>Domasno</h2>
            {
                props.prikaziPrv === false ? <h4>Ime: { props.korisnik1.ime }</h4> : <h4>Ime: { props.korisnik2.ime }</h4>
            }
            {
                props.prikaziPrv === false ?
                <div>
                    <p>Ime: { props.korisnik1.ime }</p>
                    <p>Username: { props.korisnik1.username }</p>
                    <p>Email: { props.korisnik1.email }</p>
                </div>
                :
                <div>
                    <p>Ime: { props.korisnik2.ime }</p>
                    <p>Username: { props.korisnik2.username }</p>
                    <p>Email: { props.korisnik2.email }</p>
                </div>
            }
            {
                props.prikaziKorisnik && <h3>So logicko i operatorot go pecatam korisnikot { props.korisnik1.ime } </h3>
            }
        </div>
    )
}