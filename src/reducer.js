import React from 'react'


export const initialState = {
    user: null,
    //..... And So On
};
function reducer(state, action) {
    console.log(action);
    switch (action.type) {
        case "SET_USER":
            return {
                ...state,
                user: action.user,
            }
        // ....... And So On
    }
}

export default reducer;
