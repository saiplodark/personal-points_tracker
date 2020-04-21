import React from 'react'
import {connect} from 'react-redux'
import{getUserSession} from '../redux/userReducer'
import Nav from '../Nav'
import routes from '../routes'


class Header extends React.Component{

    componentDidMount(){
        this.props.getUserSession()
    }

    render(){
        console.log("HEADER props: ", this.props)
        
        return <div>
            {
                (this.props.loading)
                ?
                <div>Loading...</div>
                :<div>Welcome, {this.props.user.username}!</div>
            }
                    <Nav/>
                    {routes}
                </div>
    }
}

const mapStateToProps = state => state;
const mapDispatchToProps = {getUserSession}

export default connect(mapStateToProps,mapDispatchToProps)(Header)