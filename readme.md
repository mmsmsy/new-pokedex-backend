Backend of Pokemon react app (https://github.com/mmsmsy/new-pokedex-frontend).

Used express, monk, axios, cors to get data from mongodb to the react frontend app. Api in mongodb is a copy of pokeapi/api/v2/pokemon api that was downloaded using the following code:

axios.get('http://pokeapi.co/api/v2/pokemon?limit=11&offset=800')
  .then(res => res.data)
  .then(res => {
    return Promise.all(
      res.results.map(result => axios.get(result.url).then(res => res.data))
    )
  })
  .then(pokemonsy => {
    pokemonsy.map(pokemon => pokemons.insert(pokemon))
  })
  .catch(console.error);

  start by installing nodemon and using command: "nodemon app.js" while in the root folder.