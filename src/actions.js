import * as actions from './constants';
import { apiCall } from "./api/api";

export const setSearchField = (text) => ({
    type: actions.CHANGE_SEARCH_FIELD,
    payload: text
});


export const requestRobots = () => (dispatch) => {
    dispatch({ type: actions.REQUEST_ROBOTS_PENDING });
    apiCall('https://jsonplaceholder.typicode.com/users')
        .then(data => dispatch({ type: actions.REQUEST_ROBOTS_SUCCESS, payload: data }))
        .catch(error => dispatch({ type: actions.REQUEST_ROBOTS_FAILED, payload: error }));
};