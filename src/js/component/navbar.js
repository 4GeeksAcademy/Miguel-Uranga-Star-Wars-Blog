import React, {useEffect, useContext} from "react";
import { Link } from "react-router-dom";
import StarWars from "../../img/StarWars.png"
import { Context } from "../store/appContext";

export const Navbar = () => {
	const  {store, actions}  = useContext(Context);
	//console.log(store.favorites)

	const deleteFavorites = async (index) =>{
		await actions.deletingItem(index);
	}
	return (
		<nav className="navbar navbar-light">
			<Link to="/dashboard">
				<span className="navbar-brand mb-0 h1"><img src = {StarWars} style={{"height":"60px", "margin-left":"5vw"}}/></span>
			</Link>
			<div className="dropdown">
				<button className="text-light border-0 me-5 dropdown-toggle" data-bs-toggle="dropdown" style={{"background-color":"rgb(2, 1, 1)"}}>Check the Context in action</button>
				<ul class="dropdown-menu">
				{store.favorites ? store.favorites.map((item, index) => {
					return(
					<li>
						<div className="container-fluid">
							<p>
							<Link className="dropdown-item" to={"/dashboard/"+ item.type + "/" + item.name}>
								{item.name}
							</Link>
							</p>
							<p><i class="fa-solid fa-trash" onClick={()=> {deleteFavorites(index)}}></i></p>
							</div>
						
						
					 </li>
					)
					 
				})
				:false}
				</ul>
			</div>
		</nav>
	);
};
