// src/components/header/Header.jsx
import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";

export function Header({ searchTerm, setSearchTerm }) {
  return (
    <header className="header">
      <Link to="/" id="logo-link" className="logo">
        OLIGON
      </Link>

      <nav className="header-nav">
        {/* ④ Input de busca */}
        <input
          type="text"
          className="header-search"
          placeholder="Pesquisar..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />

        <Link to="/" className="header-button">
          Listar
        </Link>
        <Link to="/add" className="header-button">
          Adicionar
        </Link>
      </nav>
    </header>
  );
}
