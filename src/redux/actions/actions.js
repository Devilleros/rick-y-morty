import {ADD_FAV , REMOVE_FAV} from "./action_type"


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