import React, { useEffect, useState } from "react";

import { Api } from "../../api/api";

import { ItemCard } from "../item-card/ItemCard";

import "./ReadAll.css";

export function ReadAll() {
    // useState
    const [listaResultadoApi, atualizarListaResultadoApi] = useState("");

    // useEffect
    useEffect(() => {
        if (!listaResultadoApi) {
            obterResultado();
        }
    });

    const obterResultado = async () => {
        const resultado = await Api.buildApiGetRequest(Api.readAllUrl());

        const dados = await resultado.json();

        atualizarListaResultadoApi(dados);
    };

    if (!listaResultadoApi) {
        return <div>Carregando...</div>;
    }

    return (
        <div className="read-all">
            {listaResultadoApi.map((item, index) => (
                <ItemCard item={item} key={index} />
            ))}
        </div>
    );
}
