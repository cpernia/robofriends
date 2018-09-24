import * as actions from './actions';
import * as constants from './constants';

import apiCall from './api/api';

import configureMockStore from 'redux-mock-store';
import thunkMiddleware from 'redux-thunk';

const mockStore = configureMockStore([thunkMiddleware]);

it('should create an action to search robots', ()  => {
    const text = 'woo';
    const expectedAction = {
        type: constants.CHANGE_SEARCH_FIELD,
        payload: text
    };
    expect(actions.setSearchField(text)).toEqual(expectedAction);
});

it('handles requesting robots API', () => {
    const store = mockStore();
    store.dispatch(actions.requestRobots());
    const action = store.getActions();
    console.log(action);
    const expectedAction = {
        type: constants.REQUEST_ROBOTS_PENDING
    };
    expect(action[0]).toEqual(expectedAction);
});