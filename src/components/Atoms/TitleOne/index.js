import React from "react"
import propTypes from "prop-types";
import cx from "classnames"

const TitleOne = ({ children, className }) => {

    return (

        <h1 className={cx(className, "title")}> {children} </h1>

    )

}

TitleOne.propTypes = {
    children: propTypes.node.isRequired,
    className: propTypes.string
}

export default TitleOne