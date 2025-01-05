const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			characters: [],
			vehicles: [],
			planets: [],
			pathDetails: "",
			demo: [
				{
					title: "FIRST",
					background: "white",
					initial: "white"
				},
				{
					title: "SECOND",
					background: "white",
					initial: "white"
				}
			]
		},
		actions: {
			// Use getActions to call a function within a fuction
			exampleFunction: () => {
				getActions().changeColor(0, "green");
			},
			getCharacters: async () => {
				/**
					fetch().then().then(data => setStore([ "foo": data.bar }))
				*/
				try{
					const response = await fetch("https://www.swapi.tech/api/people")
					
					const data = await response.json()
					if(!data){
						return -1
					}

					//console.log(data.results)
					await setStore({characters: data.results})

					const dataLocalized = JSON.stringify(getStore().characters)

					localStorage.setItem("storeCharacters", dataLocalized)

					//console.log(localStorage.getItem("storeCharacters"))

					//console.log(localStorage.storeCharacters)
					return data

				}
				catch(error){
					console.log(error)
					return error
				}
			},
			getPlanets: async () =>{
				try{
					const response = await fetch("https://www.swapi.tech/api/planets")
					
					const data = await response.json()
					if(!data){
						return -1
					}

					//console.log(data.results)
					await setStore({planets: data.results})
					//console.log(getStore().planets)

					const dataLocalized = JSON.stringify(getStore().planets)

					localStorage.setItem("storePlanets", dataLocalized)

					//console.log(localStorage.getItem("storePlanets"))
					return data

				}
				catch(error){
					console.log(error)
					return error
				}
			},
			getVehicles: async () =>{
				try{
					const response = await fetch("https://www.swapi.tech/api/vehicles")
					
					const data = await response.json()
					if(!data){
						return -1
					}

					//console.log(data.results)
					await setStore({vehicles: data.results})

					const dataLocalized = JSON.stringify(getStore().vehicles)

					localStorage.setItem("storeVehicles", dataLocalized)

					//console.log(localStorage.getItem("storeVehicles"))

					//console.log(localStorage.storeVehicles)
					return data

				}
				catch(error){
					console.log(error)
					return error
				}
			},
			setAllItems: async () => {
				await setStore({characters: JSON.parse(localStorage.getItem("storeCharacters"))})
				await setStore({planets: JSON.parse(localStorage.getItem("storePlanets"))})
				await setStore({vehicles: JSON.parse(localStorage.getItem("storeVehicles"))})
			},
			setItemCheck: async (classification) => {
				await setStore({pathDetails: classification})
			},
			itemExists: async (itemToCheck) => {
				if(!localStorage.storeCharacters){
					if(itemToCheck in getStore().characters){
						await setStore({pathDetails: "characters"})
						return "characters"
					}
				}
				else {
					if(localStorage.storeCharacters.includes(itemToCheck)) {
						await setStore({pathDetails: "characters"})
						return "characters"
					}
				}


				if(!localStorage.storePlanets){
					if(itemToCheck in getStore().planets){
						await setStore({pathDetails: "planets"})
						return "planets"
					}
				}
				else {
					if(localStorage.storePlanets.includes(itemToCheck)) {
						await setStore({pathDetails: "planets"})
						return "planets"
					}
				}

				if(!localStorage.storeVehicles){
					if(itemToCheck in getStore().vehicles){
						await setStore({pathDetails: "vehicles"})
						return "vehicles"
					}
				}
				else {
					if(localStorage.storeVehicles.includes(itemToCheck)) {
						await setStore({pathDetails: "vehicles"})
						return "vehicles"
					}
				}

				return -1
				
			}
		}
	};
};

export default getState;
