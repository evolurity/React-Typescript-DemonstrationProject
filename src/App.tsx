import React, {useEffect, useState} from 'react';
import Card, {CardVariant} from "./components/Card";
import {ITodo, IUser} from "./types/types";
import axios from "axios";
import List from "./components/List";
import UserItem from "./components/UserItem";
import TodoItem from "./components/TodoItem";
import EventsExample from "./components/EventsExample";
import {BrowserRouter, NavLink, Route, Routes} from "react-router-dom";
import UserPage from "./components/UserPage";
import TodosPage from "./components/TodosPage";
import UserItemPage from "./components/UserItemPage";
import TodoItemPage from "./components/TodoItemPage";

const App = () => {

    return (
        <BrowserRouter>
            <div>
                <NavLink to={'/users'}>Users</NavLink>
                <NavLink to={'/todos'}>Todos</NavLink>
            </div>
            <Routes>
                <Route path={'/users'} element={<UserPage/>}></Route>
                <Route path={'/todos'} element={<TodosPage/>}></Route>
                <Route path={'/users/:id'} element={<UserItemPage/>}></Route>
                <Route path={'/todos/:id'} element={<TodoItemPage/>}></Route>
            </Routes>
        </BrowserRouter>
    );
};

export default App;