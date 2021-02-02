import React from 'react';
import { NavLink } from 'react-router-dom';

export default function Header(params) {
    return (
        <header>
            <ul>
                <li><NavLink to="/" exact>ToDoList</NavLink></li>
                <li><NavLink to="/notes" exact>Notes</NavLink></li>
            </ul>
        </header>
    );
}