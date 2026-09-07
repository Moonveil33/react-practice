import React from "react";
import { useLoaderData } from "react-router";

function UserDetails() {
  const data = useLoaderData();

  console.log(data);

  return (
    <ul>
      {data.map((item) => (
        <li>{item.title}</li>
      ))}
    </ul>
  );
}

export default UserDetails;
