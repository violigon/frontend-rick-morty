import { useEffect, useState } from "react";
import { Api } from "../../api/api";

import "./Update.css";

export function Update(props) {
    const id = props.match.params.id;

    const [item, setItem] = useState("");

    const [previewImage, setPreviewImage] = useState("");

    useEffect(() => {
        if (!item) {
            getItemData();
        }
    });

    const getItemData = async () => {
        const resultado = await Api.buildApiGetRequest(Api.readSingleUrl(id));

        const dados = await resultado.json();

        setItem(dados);

        setPreviewImage(dados.imagemUrl);
    };

    const handleSubmit = async event => {
        event.preventDefault();

        const nome = event.target.nome.value;
        const imagemUrl = event.target.imagemUrl.value;

        const dados = {
            nome,
            imagemUrl,
        };

        const resultado = await Api.buildApiPutRequest(
            Api.updateUrl(id),
            dados
        );

        const jsonResultado = await resultado.json();

        props.history.push(`/view/${jsonResultado._id}`);
    };

    const updatePreview = event => {
        setPreviewImage(event.target.value);
    };

    return (
        <div className="update">
            <form className="form" onSubmit={handleSubmit}>
                <label htmlFor="nome" className="form__label">
                    Nome:
                </label>
                <br />
                <input
                    type="text"
                    id="nome"
                    name="nome"
                    className="form__input"
                    defaultValue={item.nome}
                />
                <br />
                <label htmlFor="imagemUrl" className="form__label">
                    URL da Imagem:
                </label>
                <br />
                <input
                    type="text"
                    id="imagemUrl"
                    name="imagemUrl"
                    className="form__input"
                    defaultValue={item.imagemUrl}
                    onChange={updatePreview}
                />
                <br />
                <span className="form__label">Prévia da imagem:</span>
                <br />
                <img
                    src={previewImage}
                    className="preview-image"
                    alt="Prévia da Imagem"
                />
                <br />
                <br />
                <input
                    type="submit"
                    value="Editar"
                    className="button button--blue button--full"
                />
            </form>
        </div>
    );
}
