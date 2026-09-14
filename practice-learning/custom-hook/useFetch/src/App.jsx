import { useEffect, useState } from "react";
import "./App.css";
import useFetch from "./hooks/useFetch";

function App() {
  //"https://jsonplaceholder.typicode.com/users"
  const {
    data: users,
    loading,
    error,
  } = useFetch("https://jsonplaceholder.typicode.com/users");

  if (loading) {
    return <h1>Please Wait ...</h1>;
  }
  if (error) {
    return <h1 style={{ color: "red" }}>{error}</h1>;
  }

  return (
    <>
      <ul>
        {users.map((user) => (
          <li key={user.id}>
            {user.name} - {user.email} - {user.address.city}:
            {user.address.street}:{user.address.suite}
          </li>
        ))}
      </ul>
    </>
  );
}

export default App;
