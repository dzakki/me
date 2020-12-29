import React from "react"
import { Route, BrowserRouter, Switch } from "react-router-dom"
import Home from "components/Pages/Home";
import ListArticle from "components/Pages/ListArticle";
import DetailArticle from "components/Pages/DetailArticle"
import Contact from "components/Pages/Contact";
import Experiment from "components/Pages/Experiment";
import Support from "components/Pages/Support";
import Services from "components/Pages/Services";


const Router = () => {

    return (
        <BrowserRouter>
            <Switch>
                <Route exact path="/">
                    <Home />
                </Route>
                <Route exact path="/tulisan">
                    <ListArticle />
                </Route>
                <Route path="/tulisan/contoh-detail-tulisan">
                    <DetailArticle />
                </Route>
                <Route path="/kontak">
                    <Contact />
                </Route>
                <Route path="/eksperimen">
                    <Experiment />
                </Route>
                <Route path="/dukung">
                    <Support />
                </Route>
                <Route path="/jasa">
                    <Services />
                </Route>
            </Switch>
        </BrowserRouter>
    )

}


export default Router