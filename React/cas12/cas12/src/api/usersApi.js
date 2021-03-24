import {properties} from './../config/properties';

export const getUsers = () => {
    return fetch(`${properties.api.route}/users`)
    .then(res => res.json())
    .then(json => Promise.resolve(json)) // go predavame Promise-ot bidejki nema da go koristime ovde
    .catch(err => Promise.reject(err))
}

export const changeUser = (user) => { // prima cel user objekt kako argument
    return fetch(`${properties.api.route}/users/${user.id}`, 
        {
            method: 'PUT',
            headers: { // ne gi pisuvame sekogas. Gi pisuvame koga znaeme od koj tip ke ni bide toa sto go prakjame
                'Content-Type' : 'application/json; charset=UTF-8'
            },
            body: JSON.stringify(user)

        })
        .then(res => res.json())
        .then(json => Promise.resolve(json))
        .catch(err => Promise.reject(err))
}