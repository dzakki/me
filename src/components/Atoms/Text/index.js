import React from "react"
import propTypes from "prop-types"

const Text = ({ children }) => {
    return (
        <p className="mt-3">
            {children}
        </p>
    )
}

Text.propTypes = {
    children: propTypes.node.isRequired
}

export default Text