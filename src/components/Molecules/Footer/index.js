import React from "react"
import Link from "components/Atoms/Link";

const Footer = () => {
    return (
        <footer style={{
            marginTop: "auto",
        }}>
            <div className="content has-text-centered mb-3">
                <Link to="/"><span role="img" aria-label="rumah">🏠</span></Link>
                -
                <Link to="/tulisan" className="ml-1 mr-1">Tulisan</Link>
                -
                <Link to="/eksperimen" className="ml-1 mr-1">Eksperimen</Link>
                -
                <Link to="/dukung" className="ml-1 mr-1">Dukung</Link>
                -
                <Link to="/kontak" className="ml-1 mr-1">Kontak</Link>
                <p className="has-text-grey-light is-size-7">
                    Web ini terinspirasi oleh bang <a href="https://hilman.space" target="_blank" rel="noopener noreferrer" >Hilman </a>
                </p>
            </div>
        </footer>
    )
}

export default Footer