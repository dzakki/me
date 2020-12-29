import React from "react"
import propTypes from "prop-types";

const Subtitle = ({ children }) => {
    return (
        <p className="subtitle "> {children} </p>
    )
}

Subtitle.propTypes = {
    children: propTypes.node.isRequired
}

export default Subtitle