import {
    CHANGED_SEARCH_FIELD,
    REQUEST_ROBOTS_PENDING,
    REQUEST_ROBOTS_REJECTED,
    REQUEST_ROBOTS_RESOLVED
} from "./constants";

export const setSearchField = (text) => ({
    type: CHANGED_SEARCH_FIELD,
    payload: text
})

export const requestRobots = () => (dispatch) => {
    dispatch({type: REQUEST_ROBOTS_PENDING})
    fetch('https://jsonplaceholder.typicode.com/users')
        .then(res => {
            if (res.status === 404) {
                throw new Error('page not found');
            }
             return res.json();
        })
        .then(data => dispatch({type: REQUEST_ROBOTS_RESOLVED, payload: data}))
        .catch(error => dispatch({type: REQUEST_ROBOTS_REJECTED, payload: error}))
}
