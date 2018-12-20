const initalState = {
    user: null
};

const USER_LOGIN = 'USER_LOGIN'

export default function reducer(state=initalState, action){
    switch(action.type){
        case USER_LOGIN:
            return {...state, user: action.payload}
        default:
            return state;
    }
}

export function userLogin(user){
    return {
        type: USER_LOGIN,
        payload: user
    };
};