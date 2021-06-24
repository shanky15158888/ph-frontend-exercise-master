import React from 'react'
import { connect } from 'react-redux'
import Header from '../../Components/header/Header'

const mapStateToProps = (state, ownProps) => {
    return {
        width: state.MenubarReducer.width
    }
}

export default connect(mapStateToProps)(Header)
