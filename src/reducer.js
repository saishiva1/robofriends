import {
    EMPTY_STRING,
    CHANGED_SEARCH_FIELD,
    REQUEST_ROBOTS_RESOLVED,
    REQUEST_ROBOTS_REJECTED,
    REQUEST_ROBOTS_PENDING
} from './constants';

const initialStateSearch = {
    searchField: EMPTY_STRING
};

export const searchRobots = (state = initialStateSearch, action = {}) => {
    switch (action.type) {
        case CHANGED_SEARCH_FIELD :
            return Object.assign({}, state, {searchField: action.payload});
        default:
            return state;
    }
}

const initialStateRobots = {
    isPending: false,
    robots: [],
    error: EMPTY_STRING
};

export const requestRobots = (state = initialStateRobots, action = {}) => {
    switch (action.type) {
        case REQUEST_ROBOTS_PENDING:
            return Object.assign({}, state, {isPending: true});
        case REQUEST_ROBOTS_RESOLVED:
            return Object.assign({}, state, {isPending: false, robots: action.payload,error: EMPTY_STRING});
        case REQUEST_ROBOTS_REJECTED:
            return {...state, isPending: false, error: action.payload, robots: []};
        default:
            return state;
    }
}

//Object.assign({}, state, {isPending: false, error: action.payload})