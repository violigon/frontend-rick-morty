// src/components/delete/Delete.js
import React from "react";
import { Api } from "../../api/api";
import { useHistory, useParams, Link } from "react-router-dom";

import "./Delete.css";

export function Delete() {
  const { id } = useParams();
  const history = useHistory();

  const handleDelete = async (event) => {
    event.preventDefault();
    await Api.buildApiDeleteRequest(Api.deleteUrl(id));
    history.push("/");
  };

  return (
    <div className="delete-page">
      <div className="delete-container">
        <p className="delete-message">
          Tem certeza que deseja remover este registro?
        </p>
        <div className="delete-buttons">
          <button
            onClick={handleDelete}
            className="button button--red delete-button"
          >
            Remover
          </button>
          <Link to={`/view/${id}`} className="button button--grey delete-button">
            Cancelar
          </Link>
        </div>
      </div>
    </div>
  );
}
