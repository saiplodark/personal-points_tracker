import React from 'react'
import{Link} from 'react-router-dom'
import './Nav.scss'

export default function Nav(){
    return<div>
        <nav className='nav'>
            <div className="main">
                <Link to ="/" className='links'>Points Tracker</Link>
            </div>
            <div className='link-wraps'>
                <Link to = '/amex' className='links'>Amex</Link>
                <Link to = '/chase' className='links'>Chase</Link>
                <Link to = '/citi' className='links'>Citi</Link>
                <Link to = '/login' className='loginlink'>Sign In</Link>
            </div>
        </nav>
    </div>
}
