import React, {useEffect, useContext} from "react";
import {useParams } from "react-router-dom";
import { Context } from "../store/appContext";

export const ItemDescription = () => {
    const  {store, actions}  = useContext(Context);
    const params = useParams();


    useEffect(() => {
        const beforePrint = async () => {
            await actions.setItemCheck(params.item, params.name);
        }
        beforePrint()
        //console.log(Object.keys(store.itemDetails).length)
    }, [])
    
   //console.log(Object.keys(store.itemDetails).length)
   
    return (
        <>
            <div className="ms-5 container-fluid d-flex flex-wrap" >
                <div className="container-fluid d-inline-flex rounded-2" style={{"margin-left":"20vw", "margin-top":"2vh" }}>
                    <img src="https://picsum.photos/200/300" className="card-img-top" alt="..." style={{"height":"40vh", "width":"30vw", "border-right":"solid", "border-color": "red"}}/>
                    <div className="containere" style={{"width":"30vw", "background-color":"rgb(2, 1, 1)"}}>
                        <p className="card-text text-light fs-4 ms-4 mt-5">  {store.itemDetails.name}</p>
                        <p className="card-text text-light fs-5 ms-5 mt-1 me-4">  {store.description}  </p>
                    </div>
                    
                </div>
                
                <ul className="d-flex flex-wrap" style={{"margin-left":"20.6vw", "margin-top":"0vh", "width":"60vw", "background-color":"rgb(2, 1, 1)", "border-top":"solid", "border-color": "red"}}>
                            { store.itemDetails ? Object.keys(store.itemDetails).map(key => {
                                 return (
                                    <li
                                            key={key}
                                            className="list-group-item border-0" style = {{"background-color":"rgb(2, 1, 1)"}}>
                                            <div className="container-fluid" style={{"border-right":"solid", "border-collapse": "separate", "border-spacing":"60px" }}>
                                                <p className="card-text text-light mt-0  fs-4 fw-bold">{key}</p>
                                                <p className="card-text text-light mt-0 fs-4">{store.itemDetails[key]}</p>
                                                
                                            </div>
                                            
                                    </li>
                                );
                             }) : false
                        }
                </ul>
            </div>
            
        </>
    )
}