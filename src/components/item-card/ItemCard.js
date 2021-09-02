import "./ItemCard.css";

export function ItemCard(props) {
    const item = props.item;

    return (
        <a href={"/view/" + item._id}>
            <div className="card">
                <h1 className="card__title">{item.nome}</h1>
                <img src={item.imagemUrl} alt={item.nome} width="200" />
            </div>
        </a>
    );
}
