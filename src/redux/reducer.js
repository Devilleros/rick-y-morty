import {ADD_FAV , REMOVE_FAV} from "./actions/action_type"

const initialState = {
    myFavorites:[]
}

export default function Reducer(state =initialState, action) {
    switch (action.type) {
        case ADD_FAV:
            return {
                ...state,
                myFavorites: [...state.myFavorites, action.payload]
            }
        case REMOVE_FAV:
            return {
                ...state,
                myFavorites: state.myFavorites.filter(char => char.id !== action.payload)
            }    
        default:
            return {...state}
    }
}