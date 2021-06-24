import React from 'react';
import * as types from './actionTypes' 

export const navbarWidthAction = (data) => {
    return {
        type: types.UPDATENAVBAR_WIDTH_TYPE,
        data
    }
}

export const fetchDataDispatchAction = (data) => {
    return {
        type: types.FETCH_DATA,
        data
    }
}

export const thunk_action_creator = (url) => {
    return async function(dispatch, getState) {
        const promise = await fetch(url);
        const response = await promise.json();
        dispatch(fetchDataDispatchAction(response))
    }
}

