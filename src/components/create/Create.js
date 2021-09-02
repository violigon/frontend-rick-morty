import { useState } from "react";
import { Api } from "../../api/api";

import "./Create.css";

export function Create(props) {
    const [previewImage, setPreviewImage] = useState("");

    const handleSubmit = async event => {
        event.preventDefault();

        const nome = event.target.nome.value;
        const imagemUrl = event.target.imagemUrl.value;

        const dados = {
            nome,
            imagemUrl,
        };

        const resultado = await Api.buildApiPostRequest(Api.createUrl(), dados);

        const jsonResultado = await resultado.json();

        props.history.push(`/view/${jsonResultado._id}`);
    };

    const updatePreview = event => {
        setPreviewImage(event.target.value);
    };

    return (
        <div className="create">
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
                    onChange={updatePreview}
                />
                <br />

                {previewImage ? (
                    <div>
                        <span className="form__label">Prévia da imagem:</span>
                        <br />
                        <img
                            src={previewImage}
                            className="preview-image"
                            alt="Prévia da Imagem"
                        />
                    </div>
                ) : (
                    ""
                )}
                <br />

                <input
                    type="submit"
                    value="Adicionar"
                    className="button button--green button--full"
                />
            </form>
        </div>
    );
}
