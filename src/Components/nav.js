import React from 'react'
import '../App.css'
import { Link } from 'react-router-dom'
class Nav extends React.Component {
    render() {
        return (
            <ul className="nav nav-tabs">
                <Link to="/movies" className="nav-link" >Movies</Link>
                <Link to="/tvshows" className="nav-link" >Tv Shows</Link>
            </ul>
        )
    }
}
export default Nav