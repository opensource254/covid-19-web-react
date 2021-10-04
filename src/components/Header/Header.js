import React from "react"
import { Link } from "gatsby"

import logo from "./logo.svg"
import "./Header.scss"

class Header extends React.Component {
    render() {
        const { title } = this.props
        return (
            <header>
                <div className="LogoWrapper">
                    <Link to="/">
                        <img className="appIcon" src={logo} alt="Covid-19 Outbreak Tracker" />
                    </Link>
                </div>
                <div className="Title">
                    <h3>{title}</h3>
                </div>

                <nav className="Navigation">
                    <ul>
                        <li>
                            <Link activeClassName="active" to="/">
                                Global cases
                            </Link>
                        </li>
                        <li>
                            <Link activeClassName="active" to="/allCountries">
                                All countries
                            </Link>
                        </li>
                        <li>
                            <Link activeClassName="active" to="/about">
                                About
                            </Link>
                        </li>
                    </ul>
                </nav>
            </header>
        )
    }
}

export default Header
