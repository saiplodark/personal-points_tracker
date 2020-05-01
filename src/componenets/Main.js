
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
        return(
            <div className="mainclass">
                <h1>Your total points is {this.state.points}</h1>
                <h2>Your total points worth for cash</h2>
                <h3>Your total points worth for travel</h3>
            </div>
        )
    }
}


const mapStateToProps = state => state;
export default connect(mapStateToProps, {getUserSession})(Main)
//total points write sql , endpoint for it, cardCtrl