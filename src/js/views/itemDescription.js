import React, {useEffect, useContext} from "react";
import {useParams } from "react-router-dom";
import { Context } from "../store/appContext";

export const ItemDescription = () => {
    const  {store, actions}  = useContext(Context);
    const params = useParams();
    useEffect(() => {
        const itemChecking = async () => {
           const result = await actions.itemExists(params.name)
        }
        itemChecking()
    }, [])
    
    
   

    return (
        <>
            <div className="ms-5 container-fluid d-flex flex-wrap">
                <img src="https://picsum.photos/200/300" className="card-img-top" alt="..." style={{"height":"20vh"}}/>
                <p className="card-text text-light mt-0 fs-4">{store[store.pathDetails]}</p>
            </div>
            
        </>
    )
}