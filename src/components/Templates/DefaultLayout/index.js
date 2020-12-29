import React from "react"
import propTypes from "prop-types"
import Navbar from "components/Molecules/Navbar";
import Footer from "components/Molecules/Footer";

const DefaultLayout = ({ children }) => {
    return (
        <div
            className="m-0 mt-6 is-flex is-flex-direction-column"
            style={{
                height: "90vh",
            }}
        >
            <Navbar />
            {children}
            <Footer />
        </div>
    )
}

DefaultLayout.propTypes = {
    children: propTypes.node.isRequired
}
export default DefaultLayout