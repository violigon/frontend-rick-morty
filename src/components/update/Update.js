// src/components/update/Update.js

import React, { useEffect, useState } from "react";
import { useParams, useHistory } from "react-router-dom";
import { Api } from "../../api/api";

import "./Update.css";

export function Update() {
  const { id } = useParams();
  const history = useHistory();
  const [item, setItem] = useState(null);
  const [previewImage, setPreviewImage] = useState("");

  // Fetch once on mount or when `id` changes
  useEffect(() => {
    getItemData();
  }, [id]);

  async function getItemData() {
    try {
      const resultado = await Api.buildApiGetRequest(Api.readSingleUrl(id));
      const dados = await resultado.json();
      setItem(dados);
      setPreviewImage(dados.imagemUrl);
    } catch (err) {
      console.error("Failed to load item:", err);
    }
  }

  function updatePreview(e) {
    setPreviewImage(e.target.value);
  }

  async function handleSubmit(e) {
    e.preventDefault();
    const nome = e.target.nome.value;
    const imagemUrl = e.target.imagemUrl.value;
    const payload = { nome, imagemUrl };

    try {
      const resultado = await Api.buildApiPutRequest(Api.updateUrl(id), payload);
      const json = await resultado.json();
      // API returns `id`, Mongo might return `_id`
      const newId = json.id ?? json._id;
      history.push(`/view/${newId}`);
    } catch (err) {
      console.error("Failed to update item:", err);
    }
  }

  if (!item) {
    return <div className="update loading">Carregando...</div>;
  }

  return (
    <div className="update">
      <form className="form" onSubmit={handleSubmit}>
        <label htmlFor="nome" className="form__label">
          Nome:
        </label>
        <input
          type="text"
          id="nome"
          name="nome"
          className="form__input"
          defaultValue={item.nome}
          required
        />

        <label htmlFor="imagemUrl" className="form__label">
          URL da Imagem:
        </label>
        <input
          type="url"
          id="imagemUrl"
          name="imagemUrl"
          className="form__input"
          defaultValue={item.imagemUrl}
          onChange={updatePreview}
          required
        />

        <span className="form__label">Prévia da imagem:</span>
        <img
          src={previewImage}
          className="preview-image"
          alt="Prévia da Imagem"
        />

        <button type="submit" className="button button--blue button--full">
          Editar
        </button>
      </form>
    </div>
  );
}
