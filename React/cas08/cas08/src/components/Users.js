import React, {useEffect, useState} from 'react';

export function Users() {
    const [users, setUsers] = useState([]); // moze i default vrednost da se stavi undefined. Se izvrsuva prvo
    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(response => response.json() )  //imeto na argumentot vo anonimnata funkcija go davame nie i rezultatot go transformirame vo json
        .then(json => setUsers(json)) // ova se izvrsuva 3to
        .catch(err => alert(err));
    }, [])
    return( // ova se izvrsuva vtoro
        <div id="users">
            <h2>Users</h2>
            {/* <p>{users.length > 0 && users[0].name }</p> */}
            { users.length > 0 ?
            <table border="1">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Username</th>
                        <th>Email</th>
                        <th>Street</th>
                    </tr>
                </thead>
                <tbody>
                    {users.map(user => {
                        return( // return moze da se izostavi ako ja izbriseme curly bracket od 27 linija
                        <tr key={user.id}>
                            <td>{user.id}</td>
                            <td>{user.name}</td>
                            <td>{user.username}</td>
                            <td>{user.email}</td>
                            <td>{user.address.street}</td>
                        </tr>
                        )} // zatvarame return
                    )}
                    
                </tbody>
            </table>
            : <h3>Loading..</h3>

            }
        </div>
    )
}