import React from "react"
import cx from "classnames"
import propTypes from "prop-types"
import styles from "./styles.module.scss"

const CodeEmbed = ({ url, title, className, height }) => {


    return (
        <>
            <iframe
                id="codeEmbed"
                src={url}
                className={cx(className, "image is-fullwidth", styles.CodeEmbed)}
                style={{
                    height: height || "230px",
                    border: 0,
                    transform: "scale(1)",
                    overflow: "hidden"
                }}
                sandbox="allow-scripts allow-same-origin"
                title={title || "code snippet"}
            >
            </iframe>
        </>
    )

}

CodeEmbed.propTypes = {
    url: propTypes.node.isRequired,
    title: propTypes.string,
    className: propTypes.string,
    height: propTypes.string
}

export default CodeEmbed
// ref: https://carbon.now.sh/embed?bg=rgba%28171%2C184%2C195%2C100%29&t=monokai&wt=none&l=jsx&ds=true&dsyoff=16px&dsblur=37px&wc=true&wa=false&pv=48px&ph=32px&ln=false&fl=1&fm=Hack&fs=13px&lh=133%25&si=false&es=2x&wm=false&code=%253CText%253E%250A%2520%2520%2509Hello%2520world%250A%253C%252FText%253E

/* <iframe
  src="https://carbon.now.sh/embed/"
  style="width: 1024px; height: 473px; border:0; transform: scale(1); overflow:hidden;"
  sandbox="allow-scripts allow-same-origin">
</iframe> */