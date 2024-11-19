import axios from "axios";

const UserCard = () => {
  return (
    <div className="card">
      <div className="card-body d-flex justify-content-between">
        <div
          className="d-flex align-items-center justify-content-between"
          style={{ width: "25%" }}
        >
          <h1 style={{ padding: "0px", margin: "0px" }}>1</h1>
          <div className="d-flex flex-column">
            <p style={{ padding: "0px", margin: "0px" }}>Nome</p>
            <h3 style={{ padding: "0px", margin: "0px" }}>CPF</h3>
          </div>
        </div>
        <div
          className="d-flex justify-content-between"
          style={{ width: "21%" }}
        >
          <button type="button" className="btn-info">Editar</button>
          <button type="button" className="btn-danger">Excluir</button>
        </div>
      </div>
    </div>
  );
};

export default UserCard;
