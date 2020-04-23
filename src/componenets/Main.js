
import React, { Component } from 'react'
import  {connect} from 'react-redux'
import {getUserSession} from '../redux/userReducer'

 class Main extends Component{

    componentDidMount(){
        this.props.getUserSession()
    }

    render(){
        return(
            <div>
                Main
            </div>
        )
    }
}


const mapStateToProps = state => state;
export default connect(mapStateToProps, {getUserSession})(Main)