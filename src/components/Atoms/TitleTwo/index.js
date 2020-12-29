import React from "react"
import propTypes from "prop-types";
import cx from "classnames"

const TitleOne = ({ children, className }) => {

    return (

        <h2 className={cx(className, "title is-4 mt-3")}> {children} </h2>

    )

}

TitleOne.propTypes = {
    children: propTypes.node.isRequired,
    className: propTypes.string
}

export default TitleOne