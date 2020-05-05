import React from 'react'
import axios from 'axios'
import {Redirect}from 'react-router-dom'

class Signout extends React.Component{
    constructor(){
        super()
        this.state={
            username:'',
            password:'',
            email:'',
        }
        this.signout = this.signout.bind(this)
    }

    async signout(){
        const {username, password} = this.state
        const user = await axios.get('/auth/signout', {username, password})
        console.log("from signout: ", user.data)
        this.setState({redirect:true})
    }

    
    render(){
            if(this.state.redirect){
                return<Redirect to='/'/>
            }
        
        return<div className="out">
            <button onClick={this.signout} >Signout</button>
        </div>
    }

}

export default Signout