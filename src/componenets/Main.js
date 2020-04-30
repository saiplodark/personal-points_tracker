
import React, { Component } from 'react'
import  {connect} from 'react-redux'
import {getUserSession} from '../redux/userReducer'
import axios from 'axios'

 class Main extends Component{
     constructor(){
         super()
         this.state={
             points:'',
             annual_fee:''
         }
     }
     combinePoints=()=>{
         axios.get('/api/cards/points')
         .then(({data})=>{
             this.setState({
                 points:data
             })
         })
     }
    //  componentDidUpdate(prevProps){
    //     if(prevProps.user.user_id){
    //       this.combinePoints();
    //     }
    //     }

        componentDidUpdate(prevProps){
            console.log("testing")
            if(this.props.user.user_id && prevProps.user.user_id !== this.props.user.user_id){
              this.combinePoints();
            }
            }
     componentDidMount(){
         this.props.getUserSession()
         this.combinePoints()
        }
    render(){
        console.log(this.state.points)
        return(
            <div>
                Your total points is {this.state.points}
               Your total points worth for cash
                Your total points worth for travel
            </div>
        )
    }
}


const mapStateToProps = state => state;
export default connect(mapStateToProps, {getUserSession})(Main)
//total points write sql , endpoint for it, cardCtrl