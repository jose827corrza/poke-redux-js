import { SET_POKEMONS } from "../actions/types";

const initialState = {
    pokemons: []
};

// Action is the change that we want to do
export const pokemonsReducer = (state = initialState, action) => {
    switch(action.type) {
        case SET_POKEMONS:
            return { ...state, pokemons: action.payload}
        default:
            return state
    }
}