import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./ItemCard.css";

export function ItemCard({ item }) {
  const [loaded, setLoaded] = useState(false);

  // fallback para _id caso você eventualmente use Mongo, mas o RM API
  // sempre devolve `id`, entã o mais seguro é usar item.id primeiro
  const id = item.id ?? item._id;

  return (
    <Link to={`/view/${id}`} className="card-link">
      <div className="card">
        <div className="card__image">
          {!loaded && <div className="image-placeholder" />}
          <img
            src={item.imagemUrl}
            alt={item.nome}
            loading="lazy"
            className={loaded ? "visible card-img" : "hidden card-img"}
            onLoad={() => setLoaded(true)}
          />
        </div>
        <div className="card__body">
          <h1 className="card__title">{item.nome}</h1>
        </div>
      </div>
    </Link>
  );
}
