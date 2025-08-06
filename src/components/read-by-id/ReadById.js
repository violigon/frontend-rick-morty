import React, { useEffect, useState } from "react";
import { Api } from "../../api/api";

// ① Importe o seu ItemCard
import { ItemCard } from "../item-card/ItemCard";

import "./ReadById.css";

export function ReadById(props) {
    const id = props.match.params.id;
    const [item, setItem] = useState(null);

    useEffect(() => {
        if (!item) {
            getItemData();
        }
    }, [item]);

    async function getItemData() {
        const resultado = await Api.buildApiGetRequest(Api.readSingleUrl(id));
        const dados = await resultado.json();
        setItem(dados);
    }

    if (!item) {
        return <div>Carregando...</div>;
    }

    return (
        <div className="read-by-id">
            <div className="buttons">
                <a href={`/update/${id}`} className="button button--blue">
                    Editar
                </a>
                <a href={`/delete/${id}`} className="button button--red">
                    Remover
                </a>
            </div>

            {/* ② Uso o ItemCard para renderizar exatamente o mesmo card */}
            <ItemCard item={item} />
        </div>
    );
}
