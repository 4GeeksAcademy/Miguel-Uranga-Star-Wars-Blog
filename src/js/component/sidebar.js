import React from "react";
import { Link } from "react-router-dom";


export const SideBar = () => {
    return (
        <div className="container-fluid p-0">
            <div className="sidebar">
                <label className="text-dark">Browse categories</label>
                <Link className="options" to="dashboard/characters">Characters</Link>
                <Link className="options" to="dashboard/planets">Planets</Link>
                <Link className="options" to="dashboard/vehicles">Vehicles</Link>
            </div>
        </div>
        
    );
};