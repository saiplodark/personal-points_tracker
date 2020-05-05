import React from 'react'
import {connect} from 'react-redux'
import{getUserSession} from '../redux/userReducer'
import Nav from '../Nav'
import routes from '../routes'
import axios from 'axios'
// import {Redirect} from 'react-router-dom'
import Signout from './Signout'
import './Header.scss'
import{Link} from 'react-router-dom'


class Header extends React.Component{

    constructor(){
        super()
        this.state={
            username:'',
            password:'',
            email:'',
            toggleSideBar:false
        }
    }

    toggleSideBarFunc(){
        this.setState((prevState)=>{
            return{
                toggleSideBar: !prevState.toggleSideBar
            }
        })
    }

    componentDidMount(){
        this.props.getUserSession()
    }
    // async signout(){
    //     const {username, password} = this.state
    //     const user = await axios.get('/auth/signout', {username, password})
    //     console.log("from signout: ", user.data)
    //     this.setState({redirect:true})
    // }

    render(){
        console.log("HEADER props: ", this.props)

        // if(this.signout){
        //     return <Redirect to="/"/>
        // }
        return <div className='header'>
            <button className='menu' onClick={()=>this.toggleSideBarFunc()}>Menu</button>
                    <nav className={this.state.toggleSideBar? "show":"hide"}>
            <div className="main">
                <Link to ="/">Points Tracker</Link>
            </div>
            <div className='link-wraps'>
                <Link to = '/amex' className='links'>Amex</Link>
                <Link to = '/chase' className='links'>Chase</Link>
                <Link to = '/citi' className='links'>Citi</Link>
                <Link to = '/login' className='loginlink'>Sign In</Link>
    </div>
                    </nav>
            {
                (this.props.loading)
                ?
                <div>Loading...</div>
                :<div>Welcome, {this.props.user.username}!</div>
            }
            {
                this.props.user?
                <Signout className='so'/>
                :null
            }
                    <Nav/>
                    {routes}
                </div>
    }
}

const mapStateToProps = state => state;
const mapDispatchToProps = {getUserSession}

export default connect(mapStateToProps,mapDispatchToProps)(Header)