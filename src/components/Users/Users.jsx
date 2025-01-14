import { useEffect, useState } from 'react';
import User from './User/User';

export default function Users() {
  const [users, setUsers] = useState([]);
  const url = `https://jsonplaceholder.typicode.com/users`;

  useEffect(() => {
    (async () => {
      const response = await fetch(url);
      const data = await response.json();
      setUsers(data);
    })();
  }, []);

  return (
    <>
      <h1 className="text-3xl font-bold my-4">Loading Users Using useEffect</h1>

      <div className="grid grid-cols-3 gap-4">
        {users.map((user) => (
          <User key={user.id} user={user} />
        ))}
      </div>
    </>
  );
}
