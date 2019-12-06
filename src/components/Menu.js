import React from 'react';
import {
    NavLink
} from "react-router-dom";

function Menu() {
    return (
        <div className="Menu">
            <ul>
                <li>
                    <NavLink to="/home"><i className="fas fa-home" /> Home</NavLink>
                </li>
                <li>
                    <NavLink to="/dashboard"><i className="fas fa-desktop fa-fw" /> Dashboard</NavLink>
                </li>
                <li>
                    <NavLink to="/modules" ><i className="fab fa-flipboard fa-fw" />Modules</NavLink>
                </li>
                <li>
                    <NavLink to="/profile" ><i className="fas fa-user-secret fa-fw" /> Profile</NavLink>
                </li>
                <li>
                    <NavLink to="/settings"><i className="fas fa-cogs fa-fw" />Settings</NavLink>
                </li>
            </ul>
        </div>
    );
}

export default Menu;
