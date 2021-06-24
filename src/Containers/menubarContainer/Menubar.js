import React from 'react'
import { connect } from 'react-redux'
import Menubar from '../../Components/menubar/Menubar'
import { navbarWidthAction, thunk_action_creator } from '../../actions/actions'

const mapStateToProps = (state, ownProps) => {
    return {
        data: state.MenubarReducer
    }
}

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        updateWidth: (param) => dispatch(navbarWidthAction(param)),
        fetchData: (url) => dispatch(thunk_action_creator(url))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Menubar)
