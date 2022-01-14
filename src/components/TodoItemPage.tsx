import React, {FC, useEffect, useState} from 'react';
import {ITodo} from "../types/types";
import axios from "axios";
import {useNavigate, useParams} from "react-router-dom";

const TodoItemPage: FC = () => {
    const [todo, setTodo] = useState<ITodo | null>(null)
    const params = useParams<Record<string, string | undefined>>()
    const navigator = useNavigate()
    console.log(params);
    useEffect(() => {
        fetchTodo()
    }, [])

    async function fetchTodo() {
        try {
            const response = await axios.get<ITodo>(`https://jsonplaceholder.typicode.com/todos/${params.id}`)
            setTodo(response.data)
        } catch (err) {
            console.log(err);
        }
    }

    return (
        <>
            <button onClick={() => navigator('/todos')}>Back</button>
            <h1>Todo page</h1>
            <div>{todo?.title}</div>
            <input type="checkbox" checked={todo?.completed}/>
        </>
    );
};

export default TodoItemPage;