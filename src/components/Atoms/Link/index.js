import React from "react"
import propTypes from "prop-types"
import { NavLink } from "react-router-dom"
import cx from "classnames"
import styles from "./styles.module.scss"

const Link = ({ children, to, className }) => {
    return (
        <NavLink
            to={to}
            className={cx(styles.link, className)}
        >
            {children}
        </NavLink>
    )
}

Link.propTypes = {
    children: propTypes.node.isRequired,
    to: propTypes.node.isRequired,
    className: propTypes.string
}

export default Link