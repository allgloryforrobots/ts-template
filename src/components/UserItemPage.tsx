import React, {FC, useEffect, useState} from 'react';
import {IUser} from "../types/types";
import axios from "axios";
import {useParams, useNavigate} from "react-router-dom";

const UserItemPage: FC = () => {

    let { userId } = useParams();
    const navigate = useNavigate();

    const [user, setUser] = useState<IUser | null>(null);

    useEffect(() => {
        fetchUser()
    }, [])

    async function fetchUser() {
        try {
            const response = await axios.get<IUser>('https://jsonplaceholder.typicode.com/users/' + userId)
            setUser(response.data);
        } catch (e) {
            alert(e);
        }
    }

    return (
        <div>
            {
                user && <h2>user id: {user.id}</h2>
            }

            <button onClick={() => navigate("/users")}>Назад</button>
        </div>
    );
};

export default UserItemPage;