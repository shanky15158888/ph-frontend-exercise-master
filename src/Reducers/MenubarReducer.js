import React from 'react'
import * as type from '../actions/actionTypes'

const intitalState = {
    initialNavBarWidth: '3',
    expandedNavBarWidth: '18',
    width: '3',
    navData: []
}

const MenubarReducer = (state=intitalState, action) => {
    switch(action.type) {
        case type.UPDATENAVBAR_WIDTH_TYPE:
            if(state.width === state.initialNavBarWidth) {
                return {...state, width: state.expandedNavBarWidth}
            } else {
                return {...state, width: state.initialNavBarWidth}
            }
        case type.FETCH_DATA:
            return {...state, navData: action.data}
        default:
            return state;
    }
}



export default MenubarReducer