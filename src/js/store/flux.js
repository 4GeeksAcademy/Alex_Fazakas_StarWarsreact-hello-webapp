const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			characters: [],
			planets: [],
			vehicles: []
		},
		actions: {
			// Use getActions to call a function within a fuction
			exampleFunction: () => {
				getActions().changeColor(0, "green");
			},
			loadSomeData: () => {
				/**
					fetch().then().then(data => setStore({ "foo": data.bar }))
				*/
			},
			changeColor: (index, color) => {
				//get the store
				const store = getStore();

				//we have to loop the entire demo array to look for the respective index
				//and change its color
				const demo = store.demo.map((elm, i) => {
					if (i === index) elm.background = color;
					return elm;
				});

				//reset the global store
				setStore({ demo: demo });
			},


			fetchCharacters: async () => {
				try {
				  // Este endpoint me devuelve todos los contactos de la agenda agenda-diego (mi agenda)
				  const response = await fetch(
					"https://www.swapi.tech/api/people/"
				  );
				  const data = await response.json();
				  // Guardo los datos en el store con setStore
				  setStore({ characters: data.results || [] });
				} catch (error) {
				  console.error("Error fetching contacts:", error);
				}
			  },

			  fetchPlanets: async () => {
				try {
				  // Este endpoint me devuelve todos los contactos de la agenda agenda-diego (mi agenda)
				  const response = await fetch(
					"https://www.swapi.tech/api/planets/"
				  );
				  const data = await response.json();
				  // Guardo los datos en el store con setStore
				  setStore({ planets: data.results || [] });
				} catch (error) {
				  console.error("Error fetching contacts:", error);
				}
			  },

			  fetchVehicles: async () => {
				try {
				  // Este endpoint me devuelve todos los contactos de la agenda agenda-diego (mi agenda)
				  const response = await fetch(
					"https://www.swapi.tech/api/vehicles"
				  );
				  const data = await response.json();
				  // Guardo los datos en el store con setStore
				  setStore({ vehicles: data.results || [] });
				} catch (error) {
				  console.error("Error fetching contacts:", error);
				}
			  },

		}
	};
};

export default getState;