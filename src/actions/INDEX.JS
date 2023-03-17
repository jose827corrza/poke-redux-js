// Here is the action creator
import { SET_POKEMONS } from './types';

// @payload is the pokemons that are received to make a change of state
export const setPokemons = (payload) => ({
    type: SET_POKEMONS, 
    payload
})