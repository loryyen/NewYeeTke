import { filter } from './actions'

const initalState = {
    FILTER_TYPE: filter.ADD_USER,
    username: ""
};

export default function (state = initalState, action) {
    switch (action.type) {
        case 'add':
            return {
                ...state,
                username: action.name
            };

        default:
            return state;
    }
}