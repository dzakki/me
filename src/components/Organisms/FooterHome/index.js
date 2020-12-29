import React from "react"
import Link from "components/Atoms/Link"


const FooterHome = () => {

    return (
        <>
            <footer className="mt-3">
                <Link to="/tulisan" className="ml-1 mr-1">Tulisan</Link>
                <Link to="/eksperimen" className="ml-1 mr-1">Eksperimen</Link>
                <br />
                <Link to="/dukung" className="ml-1 mr-1">Dukung</Link>
                <Link to="/jasa" className="ml-1 mr-1">Jasa</Link>
                <Link to="/kontak" className="ml-1 mr-1">Kontak</Link>
            </footer>
        </>
    )

}



export default FooterHome