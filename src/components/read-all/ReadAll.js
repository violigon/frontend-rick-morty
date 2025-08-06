// src/components/read-all/ReadAll.js
import React, { useEffect, useState } from "react";
import { Api } from "../../api/api";
import { ItemCard } from "../item-card/ItemCard";
import "./ReadAll.css";

export function ReadAll({ searchTerm }) {
  const [listaResultadoApi, atualizarListaResultadoApi] = useState([]);

  useEffect(() => {
    if (!listaResultadoApi.length) {
      obterResultado();
    }
  }, [listaResultadoApi]);

  const obterResultado = async () => {
    const resultado = await Api.buildApiGetRequest(Api.readAllUrl());
    const dados = await resultado.json();
    atualizarListaResultadoApi(dados);
  };

  if (!listaResultadoApi.length) {
    return <div>Carregando...</div>;
  }

  // ⑤ Filtra usando includes para match aproximado (case-insensitive)
  const filtrados = listaResultadoApi.filter((item) =>
    item.nome.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="read-all">
      {filtrados.map((item) => (
        <ItemCard key={item._id} item={item} />
      ))}
    </div>
  );
}
