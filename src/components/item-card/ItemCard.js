import React, { useState } from "react";
import "./ItemCard.css";

export function ItemCard(props) {
  const { nome, imagemUrl } = props.item;
  const [loaded, setLoaded] = useState(false);

  return (
    <a href={"/view/" + props.item._id} className="card-link">
      <div className="card">
        <div className="card__image">
          {/* Placeholder */}
          {!loaded && <div className="image-placeholder" />}

          {/* Imagem com lazy loading e callback onLoad */}
          <img
            src={imagemUrl}
            alt={nome}
            loading="lazy"
            className={`card-img ${loaded ? "visible" : "hidden"}`}
            onLoad={() => setLoaded(true)}
          />
        </div>
        <div className="card__body">
          <h1 className="card__title">{nome}</h1>
        </div>
      </div>
    </a>
  );
}
