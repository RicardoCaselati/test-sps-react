import { useEffect } from "react";
import UserCard from "../components/UserCard"

// eslint-disable-next-line no-unused-vars
import UserService from "../services/UserService";

const Users = () => {


  return (
    <div>
      <h1>Usuários</h1>
      <div>Lista de usuários</div>
      <UserCard />
    </div>
  );
}

export default Users;
