
import React, { Component } from 'react'
import  {connect} from 'react-redux'
import {getUserSession} from '../redux/userReducer'
import axios from 'axios'
import "./Main.scss"

 class Main extends Component{
     constructor(){
         super()
         this.state={
             points:'',
             annual_fee:''
         }
     }
     combinePoints=()=>{
         axios.get('/api/points')
         .then(({data})=>{
             console.log(data)
             this.setState({
                 points:data[0].sum
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
        const cash = (this.state.points)*0.01
        const travel =  (this.state.points)*0.016
        return(
            <div className="mainclass">
                <h1>Your total points is {this.state.points}</h1>
                <h2>Your total cash worth is {cash} $USD</h2>
                <h3>Your total travel worth is {travel} $USD</h3>
            </div>
        )
    }
}


const mapStateToProps = state => state;
export default connect(mapStateToProps, {getUserSession})(Main)
//total points write sql , endpoint for it, cardCtrl