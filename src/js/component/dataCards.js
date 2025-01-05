import React, {useState, useContext} from "react";
import { Context } from "../store/appContext";
import { Link, useNavigate  } from "react-router-dom";
import { ItemDescription } from "../views/itemDescription";


export const DataCards = props => {
    const  {store, actions}  = useContext(Context);

    const addToFavorites = name =>{
        console.log(name)
        actions.addItemToFavorites(name, props.item)
    }

    //console.log(store.characters[0])
    return (
        <div className="ms-5 container-fluid d-flex flex-wrap">
        <div className="container-fluid" style={{"margin-left":"15vw", "margin-top":"2vh"}}>
                <ul className="d-flex flex-wrap">
                    { store[props.item] ? store[props.item].map((item, index) => {
                    return (
                        <li
                            key={index}
                            className="list-group-item border-0" style = {{"background-color":"rgb(117, 94, 94)"}}>
                            
                            {/*Contents from the list of cards*/}
                            <div className="card me-3" style={{"width":"15rem", "height":"40vh"}}>
                                <img src="https://picsum.photos/200/300" className="card-img-top" alt="..." style={{"height":"20vh"}}/>
                                <div className="card-body mt-0" style={{"height":"10vh", "border-top-style":"solid", "border-width":"thin", "border-color":"rgb(117, 94, 94)"}}>
                                    <p className="card-text text-light mt-0 fs-4">{item.name}</p>
                                </div>
                                <div className="card-footer d-flex mb-4 justify-content-between">
                                    <Link className="card-text text-danger fs-5" to={"/dashboard/"+ props.item+ "/"+ item.name}>Details</Link>
                                    <button className="border-0" style = {{"background-color":"rgb(2,1,1)"}} >
                                        <i onClick= {() => addToFavorites(item.name)} className="fa-regular fa-heart text-light"></i>
                                    </button>
                                </div>
                            </div>
                        </li>
                    );
                }) : false
            }
                </ul>
            </div>
        </div>
    );
};