import React from 'react';

import {BrowserRouter, Route, Routes, Link} from "react-router-dom";
import UserPages from "./components/UsersPage";
import TodoPage from "./components/TodoPage";
import EventsPage from "./components/EventsPage";
import UserItemPage from "./components/UserItemPage";
import TodoItemPage from "./components/TodoItemPage";
import UsersPage from "./components/UsersPage";

function App() {

    return (
        <BrowserRouter>
            <Link to={'/users'}>/users</Link>
            <Link to={'/todos'}>/todos</Link>
            <Link to={'/events'}>/events</Link>

            <Routes>
                <Route path='/events' element={<EventsPage />} />

                <Route path='/todos' element={<TodoPage />} />
                <Route path='/todos/:todoId' element={<TodoItemPage />} />

                <Route path='/users' element={<UsersPage />} />
                <Route path='/users/:userId' element={<UserItemPage />} />

            </Routes>
        </BrowserRouter>
    );

}

export default App;
