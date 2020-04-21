import React from 'react'
import {connect} from 'react-redux'
import{getUserSession} from '../redux/userReducer'
import Nav from '../Nav'
import routes from '../routes'


const  Header  = () =>{
    return(
        <header className= "header-main">
            <div>
                <Nav/>
                {routes}
            </div>
        </header>
    )
}
export default Header