import {ADD_FAV , REMOVE_FAV , FILTER_CARD , ORDER_CARD} from "./actions/action_type"

const initialState = {
    myFavorites:[],
    allCharacters:[]
}

export default function Reducer(state =initialState, action) {
    switch (action.type) {
        case ADD_FAV:
            const addFavorites = [...state.myFavorites, action.payload];
            return {
                ...state,
                myFavorites: [...addFavorites],
                allCharacters: [...addFavorites]
            }
        case REMOVE_FAV:
            return {
                ...state,
                myFavorites: state.myFavorites.filter(char => char.id !== action.payload)
            }    
        case FILTER_CARD:
            return {
                ...state,
                myFavorites: state.allCharacters.filter((char) => char.gender === action.payload)
            }
        case ORDER_CARD:
            let orderFav;
            if(action.payload === "A"){
                orderFav = state.myFavorites.sort((a,b) => a.id>b.id? 1: -1)
            }else{
                orderFav = state.myFavorites.sort((a,b) => a.id<b.id? 1: -1)    
            }
            return{
                ...state,
                myFavorites:  [...orderFav]
            }
        default:
            return {...state}
    }
}