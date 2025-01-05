import React, {useEffect, useContext} from "react";
import { useParams } from "react-router-dom";
import { Context } from "../store/appContext";
import {DataCards} from "../component/dataCards"

export const Dashboard = props => {
    const  {store, actions}  = useContext(Context);
    const params = useParams();
    //console.log(params.item)
    useEffect(() => {
        const initializePage = async () => {
            !localStorage.storeCharacters ?
                await actions.getCharacters(): false
            !localStorage.storeVehicles ?
                await actions.getVehicles(): false
            !localStorage.storePlanets ?
                await actions.getPlanets(): false
            
            //console.log(characters)
       }
       const initializeStates = async () => {
            await actions.setAllItems()
       }
        !localStorage.storeCharacters || !localStorage.storeVehicles || !localStorage.storePlanets 
        ? initializePage(): initializeStates() 
    }, [])

    

    return (
    <>
        <DataCards item = {params.item ? params.item: props.name}/>
    </>)
}