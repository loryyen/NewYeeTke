import { ADD_USER, filter } from './actions'

const initalState = {
    username: ""
};

export default function (state = initalState, action) {
    switch (action.type) {
        case ADD_USER:
            return {
                ...state,
                username: action.username
            };

        default:
            return state;
    }
}