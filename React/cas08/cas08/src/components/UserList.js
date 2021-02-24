import React from 'react';


export function UserList(props) {
    console.log(props);
    return(
        <div id="user-list">
            <h2>Users list</h2>
            
                {props.listOfUsers.length > 0 ? 
                    <ul>
                        {props.listOfUsers.map((user) => {
                            return(
                            <li key={user.id}>
                                <span>ID: {user.id}</span> &nbsp;
                                <span>Name: {user.name}</span> &nbsp;
                                <span>Username: {user.username}</span> &nbsp;
                            </li>
                            )
                        })}
                    </ul>
                : <h2>Loading...</h2>
                }
            
        </div>
    )
}