
import React, { Component } from 'react'
import  {connect} from 'react-redux'
import {getUserSession} from '../redux/userReducer'

 class Main extends Component{
     constructor(){
         super()
         this.state={
             points:'',
             annual_fee:''
         }
     }

    componentDidMount(){
        this.props.getUserSession()
    }

    render(){
        return(
            <div>
               Your total points worth for cash
                Your total points worth for travel
            </div>
        )
    }
}


const mapStateToProps = state => state;
export default connect(mapStateToProps, {getUserSession})(Main)
//total points write sql , endpoint for it, cardCtrl