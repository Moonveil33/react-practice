import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const controller = new AbortController();
    setLoading(true);
    setError(null);

    const fetchUsers = async () => {
      try {
        const response = await fetch(
          "https://jsonplaceholder.typicode.com/users",
          {
            signal: controller.signal,
          },
        );
        if (!response.ok) {
          throw new Error(`${response.status} - ${response.statusText}`);
        }
        const data = await response.json();
        setUsers(data);
        setLoading(false); // فقط در صورت موفقیت غیرفعال می‌شود
      } catch (err) {
        if (err.name !== "AbortError") {
          setError(err.message);
          setLoading(false); // در صورت بروز خطای واقعی غیرفعال می‌شود
        }
      }
    };

    fetchUsers();

    return () => controller.abort();
  }, []);

  if (loading) {
    return <h1>Please Wait ...</h1>;
  }

  return (
    <>
      {error && <p style={{ color: "red" }}>{error}</p>}
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
