// funkcionalen fajl
import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {usersOperations} from './duck';
import {UsersComponent} from './UsersComponent';

export default function UsersContainer() {
    const users = useSelector(state => state.usersReducer.users);
    const dispatch = useDispatch();
    const [user, setUser] = useState({});
    const [activeEdit, setActiveEdit] = useState(false);

    useEffect(() => {
        dispatch(usersOperations.fetchUsers())
    },[dispatch]);

    function editUser(korisnik,active) {
        setActiveEdit(active);
        setUser(korisnik);
    }

    function saveEditedUser() {
        dispatch(usersOperations.editUser(user));
        setUser({});
        setActiveEdit(false);
    }

    // Vo inputite koga treba da zapisuvame vrednost direktno vo objekt potrebno e prvo da napravime kopija od objektot pa da dodelime vrednost
    // za toa property za koe sto treba
    return(
        <div id="users-container">
            {
                activeEdit &&
                // <> </> Moze da se iskoristi i ova namesto React.Fragment </>
                <React.Fragment>
                    Name:<input type="text" value={user.name} onChange={(e) => {setUser({...user,name:e.target.value})}} /> <br/><br/>
                    Username:<input type="text" value={user.username} onChange={(e) => {setUser({...user,username:e.target.value})}} /> <br/><br/>
                    Email:<input type="text" value={user.email} onChange={(e) => {setUser({...user,email:e.target.value})}} /> <br/><br/>
                    <button onClick={saveEditedUser}>Save</button> <br/><br/>
                </React.Fragment>
            }
            <UsersComponent users={users} editUser={editUser} />
        </div>
    )
}