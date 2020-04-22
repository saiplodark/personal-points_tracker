import React from 'react'
import axios from 'axios'

export default class Login extends React.Component{
    constructor(){
        super()
        this.state={
            username:'',
            passowrd:'',
            email:'',
            
        }
    }
}