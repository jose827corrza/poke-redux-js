import axios from 'axios'

export const getPokemons = () => {
    return axios
        .get('https://pokeapi.co/api/v2/pokemon?limit=151')
        .then((res) => res.data.results)
        .catch((err) => console.log(err))
}

export const getPokemonInfo = (pokemonUrl) => {
    return axios
        .get(pokemonUrl)
        .then((res) => console.log(res))
        .catch((err) => console.log(err))
}