import { Api } from "../../api/api";

import "./Delete.css";

export function Delete(props) {
    const id = props.match.params.id;

    const handleDelete = async event => {
        event.preventDefault();

        await Api.buildApiDeleteRequest(Api.deleteUrl(id));

        props.history.push("/");
    };

    return (
        <div className="card">
            Tem certeza que deseja remover este registro?
            <br />
            <br />
            <button onClick={handleDelete} className="button button--red">
                Remover
            </button>
            <a href={`/view/${id}`} className="button button--grey">
                Cancelar
            </a>
        </div>
    );
}
