import React from "react";
import { Link } from "react-router-dom";
import StarWars from "../../img/StarWars.png"

export const Navbar = () => {
	return (
		<nav className="navbar navbar-light">
			<Link to="/dashboard">
				<span className="navbar-brand mb-0 h1"><img src = {StarWars} style={{"height":"60px", "margin-left":"5vw"}}/></span>
			</Link>
			<div className="ml-auto">
				<Link to="/demo">
					<button className="btn btn-primary">Check the Context in action</button>
				</Link>
			</div>
		</nav>
	);
};
