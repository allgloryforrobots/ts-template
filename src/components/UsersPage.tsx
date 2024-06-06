import React, {FC, useEffect, useState} from 'react';
import {useNavigate} from "react-router-dom";
import {IUser} from "../types/types";
import axios from "axios";
import List from "./List";
import UserItem from "./UserItem";

const UsersPage: FC = () => {

    const navigate = useNavigate();

    const [users, setUsers] = useState<IUser[]>([]);

    useEffect(() => {
        fetchUsers()
    }, [])

    async function fetchUsers() {
        try {
            const response = await axios.get<IUser[]>('https://jsonplaceholder.typicode.com/users')
            setUsers(response.data);
        } catch (e) {
            alert(e);
        }
    }

    return (
        <div>
            {/*<UserList users={users}/>*/}

            <List
                items={users}
                renderItem={ (user: IUser) => <UserItem onClick={(user) => navigate('/users/' + user.id)} user={user} key={user.id} /> }
            />
        </div>
    );
};

export default UsersPage;