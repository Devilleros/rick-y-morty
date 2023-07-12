import {ADD_FAV , REMOVE_FAV , FILTER_CARD , ORDER_CARD} from "./action_type"


export const addFav = (character) => {
    return {
        type: ADD_FAV,
        payload: character
    }
}

export const removeFav = (id) => ({
    type: REMOVE_FAV,
    payload: id
})

export const filterCart = (gender) => ({
    type: FILTER_CARD,
    payload: gender
})

export const orderCard = (order) => ({
    type: ORDER_CARD,
    payload: order
})
// export const getFav = () => {
//     return function (dispatch) {
//         axios()
//         .then()
//         return dispatch({
//             type: "",
//             payload:""
//         })
//     }
// }