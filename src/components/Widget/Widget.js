import React from "react"

import "./Widget.scss"

class Widget extends React.Component {
    render() {
        const { value, label, styleName, align } = this.props
        return (
            <div className={`Widget text-${align}`}>
                <h2>{value}</h2>
                <p>
                    <span className={`badge badge--${styleName}`}>{label}</span>
                </p>
            </div>
        )
    }
}

export default Widget
