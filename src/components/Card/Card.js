import React from "react"

import "./Card.scss"

class Card extends React.Component {
    render() {
        const { children, align } = this.props
        return <div className={`Card text-${align}`}>{children}</div>
    }
}

export default Card
