//action types
export const ADD_USER = 'add';

//other variables
export const filter = {
    ADD_USER: "ADD_USER"
}

//action creator
export function add(username) {
    return {
        type: ADD_USER,
        username: username
    }
}