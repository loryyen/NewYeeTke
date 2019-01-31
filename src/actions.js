
export const LONIN_USER = 'LONIN_USER';
export const LOGOUT_USER = 'LOGOUT_USER';


export const filter = {
    ADD_USER: "ADD_USER"
}


export function addUser(username) {
    return {
        type: LONIN_USER,
        username
    }
}

export function removeUser(username) {
    return {
        type: LOGOUT_USER,
        username
    }
}