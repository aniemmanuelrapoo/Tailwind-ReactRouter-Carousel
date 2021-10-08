import React from 'react'
import { Link } from 'react-router-dom'
const Rheader = () => {
    return (
        <div>
            <h1>React Router Tutorial</h1>
            <ul className="w-full flex justify-around">
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/rabout">About</Link>
                </li>
                <li>
                    <Link to="/rprofile">Profile</Link>
                </li>
            </ul>
        </div>  
    )
}

export default Rheader
