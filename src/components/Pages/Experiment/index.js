import React from "react"
import DefaultLayoutArticle from "components/Templates/DefaultLayoutArticle";
import TitleTwo from "components/Atoms/TitleTwo";

const Experiment = () => {

    return (
        <DefaultLayoutArticle title="Eksperimen">
            <TitleTwo>Eksperimen - bersama</TitleTwo>
            <p className="mb-0"><a href="https://www.youtube.com/watch?v=zyhwVPDPtn0&t=151s" target="_blank" rel="noopener noreferrer">Belajar Bersama Pejuang Kode #2 - JavaScript, Testing, & React Fundamentals</a> </p>
            <p className="mb-0">Live streaming bersama pejuang kode (
                <a href="https://www.facebook.com/zain.fathoni" target="_blank" rel="noopener noreferrer">Mas zain</a>,
                Mas Eka, Mas yusuf,
                Mas Nindra, dan
                Mas Anas),
                yang sudah di tonton sebanyak 1000++ kali</p>
            <br />

            <p className="mb-0"><a href="https://www.odaiba-app.com/" target="_blank" rel="noopener noreferrer">Odaiba</a> </p>
            <p className="">Aplikasi untuk belajar bersama dengan menerapkan konsep pair programming. Aplikasi ini di buat sejak japan hackathon 2020 hingga saat ini bersama rekan japan hackathon saya yaitu <a href="https://www.facebook.com/paulo.dalberti" target="_blank" rel="noopener noreferrer">paulo</a> (founder odaiba)</p>

            <TitleTwo>Eksperimen - sendiri</TitleTwo>
            <p>Catatan: untuk eksperimen sendiri banyak yang belum berhasil (di publish) dan masih terus belajar. untuk melihat source code eksperimen saya ada di <a href="https://github.com/dzakki" target="_blank" rel="noopener noreferrer">github</a></p>

        </DefaultLayoutArticle>
    )

}


export default Experiment 