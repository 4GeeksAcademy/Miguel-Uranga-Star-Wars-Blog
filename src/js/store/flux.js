const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			characters: [],
			vehicles: [],
			planets: [],
			itemDetails: [],
			description: "",
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

					console.log(data.results)
					await setStore({vehicles: data.results})
					//console.log(getStore().vehicles)

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
			setItemCheck: async (itemType, itemName) => {
				let foundItem = {}
				if (!localStorage){
					
				}
				else{
					itemType == "characters" ? 
					itemType = "storeCharacters": itemType == "vehicles" ? 
					itemType = "storeVehicles": itemType == "planets" ? 
					itemType = "storePlanets": console.log("Not found!") 
					const itemContents = JSON.parse(localStorage.getItem(itemType))
					
					//console.log(itemContents[0])
					
					if (itemContents){
						itemContents.map((item, index) => {
							if (itemName == item.name){
								foundItem = itemContents[index]
								return -1
							}
						})
					}

					if(!foundItem){
						console.log("Not found!")
						return -1
					}

					const response = await fetch(foundItem.url)
					
					const data = await response.json()

					console.log(data)
					if(!data){
						return -1
					}

					//console.log(data.results)
					await setStore({description: data.result.description})
					await setStore({itemDetails: data.result.properties})
					
					console.log(getStore().itemDetails)
					
				}
				
			},
		}
	};
};

export default getState;
