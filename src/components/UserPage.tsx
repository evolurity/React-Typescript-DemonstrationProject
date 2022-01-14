import React, {FC, useEffect, useState} from 'react';
import {ITodo, IUser} from "../types/types";
import axios from "axios";
import UserItem from "./UserItem";
import List from "./List";
import {useNavigate} from "react-router-dom";

const UserPage: FC = () => {
    const [users, setUsers] = useState<IUser[]>([])
    const navigator = useNavigate()

    useEffect(() => {
        fetchUsers()
    }, [])

    async function fetchUsers() {
        try {
            const response = await axios.get<IUser[]>('https://jsonplaceholder.typicode.com/users')
            setUsers(response.data)
        } catch (err) {
            console.log(err);
        }
    }

    const clickHandler = (id: number) => {
        navigator(`/users/${id}`)
    }

    return (
        <List items={users}
              renderItem={(user: IUser) => <UserItem user={user} key={user.id} clickHandler={clickHandler}/>}
        />
    );
};

export default UserPage;