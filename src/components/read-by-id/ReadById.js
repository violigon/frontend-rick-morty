import React, { useEffect, useState } from "react";
import { Api } from "../../api/api";

import "./ReadById.css";

export function ReadById(props) {
    const id = props.match.params.id;

    const [item, setItem] = useState("");

    useEffect(() => {
        if (!item) {
            getItemData();
        }
    });

    const getItemData = async () => {
        const resultado = await Api.buildApiGetRequest(Api.readSingleUrl(id));

        const dados = await resultado.json();

        setItem(dados);
    };

    return (
        <div className="read-by-id">
            <a href={`/update/${id}`} className="button button--blue">
                Editar
            </a>

            <a href={`/delete/${id}`} className="button button--red">
                Remover
            </a>

            <br />
            <div className="card">
                <h1 className="card__title">{item.nome}</h1>
                <img src={item.imagemUrl} alt={item.nome} width="200" />
            </div>
        </div>
    );
}
