// src/App.js
import React, { useState } from "react";
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
  // ① Estado de busca elevado para App
  const [searchTerm, setSearchTerm] = useState("");

  return (
    <div className="app">
      {/* ② Passa searchTerm e setter para o Header */}
      <Header searchTerm={searchTerm} setSearchTerm={setSearchTerm} />

      <div className="content">
        <Switch>
          {/* ③ Em vez de component, usamos render para injetar props */}
          <Route
            path="/"
            exact
            render={(props) => (
              <ReadAll {...props} searchTerm={searchTerm} />
            )}
          />

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
