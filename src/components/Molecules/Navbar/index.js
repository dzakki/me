import React from "react"
import Link from "components/Atoms/Link"

const Navbar = () => {
    return (
        <nav className="is-flex is-justify-content-flex-end">
            <Link to="/"> <span role="img" aria-label="rumah">🏠</span> </Link>
        </nav>
    )
}


export default Navbar