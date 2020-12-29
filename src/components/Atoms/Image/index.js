import React from "react"
import propTypes from "prop-types";
import cx from "classnames"

const Image = ({ url, alt, classFigure, classImg }) => {

    return (
        <figure className={cx(classFigure, "mt-3")}>
            <img className={cx(classImg, "has-ratio")} src={url} alt={alt} />
        </figure>
    )

}

Image.propTypes = {
    url: propTypes.string,
    alt: propTypes.string,
    classFigure: propTypes.string,
    classImg: propTypes.string,
}

export default Image
// ref: https://bulma.io/documentation/elements/image/