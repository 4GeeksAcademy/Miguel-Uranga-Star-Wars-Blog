import React, {useContext} from "react";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";


export const DataCards = props => {
    const  {store, actions}  = useContext(Context);

    // const setDetails = async () =>{
    //     await actions.setItemCheck(props.item);
    // }

    return (
        <div className="ms-5 container-fluid d-flex flex-wrap">
        <div className="container-fluid" style={{"margin-left":"10vw", "margin-top":"2vh"}}>
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
                                <div className="card-footer mb-4">
                                    <Link className="card-text text-danger fs-5" to= {item.name} >Details</Link>
                                </div>
                            </div>
                            {/* <div className="d-flex mt-3">
                                <div className="fs-5 me-5" onClick={() => navigate("/updateContact/" + (item.id))}><i className="fa-solid fa-user-pen"></i></div>
                                <div className="fs-5 me-5" onClick = {deletionCheck(item.id, item.name)} data-bs-target="#deletionModal" data-bs-toggle= "modal"><i className="fa-solid fa-trash-can"></i></div>
                            </div> */}
                        </li>
                    );
                }) : false
            }
                </ul>
            </div>
        </div>
    );
};