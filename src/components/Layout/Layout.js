import React from "react"

import "./Layout.scss"

import Header from "../Header/Header"
import Footer from "../Footer/Footer"

class Layout extends React.Component {
    render() {
        const { children } = this.props
        return (
            <div className="Container">
                <Header title="Coronavirus Outbreak Tracker" />
                <main>{children}</main>
                <Footer />
            </div>
        )
    }
}

export default Layout
