import * as actions from './constants';

export const setSearchField = (text) => ({
    type: actions.CHANGE_SEARCH_FIELD,
    payload: text
});


export const requestRobots = () => (dispatch) => {
    dispatch({ type: actions.REQUEST_ROBOTS_PENDING });
    fetch('https://jsonplaceholder.typicode.com/users')
        .then(response => {
            return response.json();
        })
        .then(data => dispatch({ type: actions.REQUEST_ROBOTS_SUCCESS, payload: data }))
        .catch(error => dispatch({ type: actions.REQUEST_ROBOTS_FAILED, payload: error }));
};