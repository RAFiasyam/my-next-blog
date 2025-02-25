"use client";

import { useQuery } from "@tanstack/react-query";
import { api } from "@/lib/api";

interface User {
    id: number;
    name: string;
    email: string;
}

const fetchUsers = async () => {
  const { data } = await api.get("/users");
  return data;
};

const UserList = () => {
  const { data, isLoading, error } = useQuery({
    queryKey: ["users"],
    queryFn: fetchUsers,
  });

  if (isLoading) return <p>Loading users...</p>;
  if (error) return <p>Error fetching users!</p>;

  return (
    <ul>
      {data.map((user: User) => (
        <li key={user.id}>{user.name} - {user.email}</li>
      ))}
    </ul>
  );
};

export default UserList;
