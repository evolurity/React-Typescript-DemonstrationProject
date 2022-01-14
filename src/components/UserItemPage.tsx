import React, {FC, useEffect, useState} from 'react';
import {IUser} from "../types/types";
import axios from "axios";
import {useNavigate, useParams} from "react-router-dom";

const UserItemPage: FC = () => {
    const [user, setUser] = useState<IUser | null>(null)
    const params = useParams<Record<string, string | undefined>>()
    const navigator = useNavigate()
    console.log(params);
    useEffect(() => {
        fetchUser()
    }, [])

    async function fetchUser() {
        try {
            const response = await axios.get<IUser>(`https://jsonplaceholder.typicode.com/users/${params.id}`)
            setUser(response.data)
        } catch (err) {
            console.log(err);
        }
    }

    return (
        <>
            <button onClick={() => navigator('/users')}>Back</button>
            <h1>User page</h1>
            <div>{user?.email}</div>
            <div>{user?.address.city}.{user?.address.street}</div>
        </>
    );
};

export default UserItemPage;