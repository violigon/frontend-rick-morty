import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Api } from "../../api/api";
import { ItemCard } from "../item-card/ItemCard";

import "./ReadById.css";

export function ReadById({ match }) {
  const id = match.params.id;
  const [item, setItem] = useState(null);

  useEffect(() => {
    getItemData();
  }, [id]);

  async function getItemData() {
    try {
      const resultado = await Api.buildApiGetRequest(Api.readSingleUrl(id));
      const dados = await resultado.json();
      setItem(dados);
    } catch (error) {
      console.error("Failed to fetch item:", error);
    }
  }

  if (!item) {
    return <div className="read-by-id loading">Carregando...</div>;
  }

  // Use item.id (from API) or fallback to item._id (if exists)
  const resolvedId = item.id ?? item._id;

  return (
    <div className="read-by-id">
      <div className="buttons">
        <Link to={`/update/${resolvedId}`} className="button button--blue">
          Editar
        </Link>
        <Link to={`/delete/${resolvedId}`} className="button button--red">
          Remover
        </Link>
      </div>
      {/* Reaproveita o mesmo ItemCard da listagem */}
      <ItemCard item={item} />
    </div>
  );
}
