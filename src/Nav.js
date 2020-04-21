import React from 'react'
import{Link} from 'react-router-dom'

export default function Nav(){
    return<div>
        <nav className='nav'>
            <div>
                <Link to ="/">
                    Points Tracker
                </Link>
            </div>
            <div className='link-wraps'>
                <Link to = '/amex' className='links'>Amex</Link>
                <Link to = '/chase' className='links'>Chase</Link>
                <Link to = '/citi' className='links'>Citi</Link>
            </div>
        </nav>
    </div>
}