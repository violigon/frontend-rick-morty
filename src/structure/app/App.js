import React from "react";
import { Switch, Route } from "react-router-dom";

import { ReadById } from "../../components/read-by-id/ReadById";
import { Create } from "../../components/create/Create";
import { Delete } from "../../components/delete/Delete";
import { ReadAll } from "../../components/read-all/ReadAll";
import { Update } from "../../components/update/Update";

import { Footer } from "../footer/Footer";
import { Header } from "../header/Header";

import "./App.css";

export function App() {
    return (
        <div className="app">
            <Header />
            <div className="content">
                <Switch>
                    <Route path="/" exact={true} component={ReadAll} />

                    <Route path="/view/:id" component={ReadById} />

                    <Route path="/add" component={Create} />

                    <Route path="/update/:id" component={Update} />

                    <Route path="/delete/:id" component={Delete} />
                </Switch>
            </div>
            <Footer />
        </div>
    );
}
