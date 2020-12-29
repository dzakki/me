import React from "react"
import DefaultLayoutArticle from "components/Templates/DefaultLayoutArticle";
import Link from "components/Atoms/Link";

const ListArticle = () => {

    return (
        <DefaultLayoutArticle title="Daftar tulisan">
            <ul>
                <li><Link to="/tulisan/contoh-detail-tulisan">Contoh detail tulisan</Link></li>
                <li><Link to="/tulisan/contoh-detail-tulisan">Lorem ipsum</Link></li>
                <li><Link to="/tulisan/contoh-detail-tulisan">Dolor sit amet</Link></li>
            </ul>
        </DefaultLayoutArticle>
    )

}


export default ListArticle 