import React from "react";
import propTypes from "prop-types";
import DefaultLayout from "components/Templates/DefaultLayout";
import TitleOne from "components/Atoms/TitleOne";


const DefaultLayoutArticle = ({ children, title }) => {
    return (
        <DefaultLayout>

            <section className="mb-6 content">
                <TitleOne>{title}</TitleOne>
                <article>
                    {children}
                </article>
            </section>

        </DefaultLayout>
    )
}

DefaultLayoutArticle.propTypes = {
    children: propTypes.node.isRequired,
    title: propTypes.string
}

export default DefaultLayoutArticle