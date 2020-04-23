import React from 'react'
import {connect} from 'react-redux'
import{getUserSession} from '../redux/userReducer'
import Nav from '../Nav'
import routes from '../routes'
import axios from 'axios'
import {Redirect} from 'react-router-dom'


class Header extends React.Component{

    constructor(){
        super()
        this.state={
            username:'',
            password:'',
            email:'',
        }
        this.signout = this.signout.bind(this)
    }

    componentDidMount(){
        this.props.getUserSession()
    }


    async signout(){
        const {username, password} = this.state
        const user = await axios.get('/auth/signout', {username, password})
        console.log("from signout: ", user.data)
        this.setState({redirect:true})
    }

    render(){
        console.log("HEADER props: ", this.props)

        // if(this.signout){
        //     return <Redirect to="/"/>
        // }
//takeout redirect stuffs in header
//use users from redux state conditionally  signout only show when user logged in 
//put redirect in bank components, it will be based of user, no user redirect to main page
        return <div>
            {
                (this.props.loading)
                ?
                <div>Loading...</div>
                :<div>Welcome, {this.props.user.username}!</div>
            }
           <button onClick={this.signout} >Signout</button>
           {/* <Redirect to ='/'/> */}
                    <Nav/>
                    {routes}
                </div>
    }
}

const mapStateToProps = state => state;
const mapDispatchToProps = {getUserSession}

export default connect(mapStateToProps,mapDispatchToProps)(Header)