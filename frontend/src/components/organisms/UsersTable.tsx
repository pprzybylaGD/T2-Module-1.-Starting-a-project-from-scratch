import React from 'react';
import type { User } from '../../api/types';

type UsersTableProps = {
  users: User[];
};

const UsersTable = ({ users }: UsersTableProps) => {
  return (
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Email</th>
          <th>Age</th>
          <th>Created At</th>
        </tr>
      </thead>
      <tbody>
        {users.map((user) => (
          <tr key={user._id}>
            <td>{user.name}</td>
            <td>{user.email}</td>
            <td>{user.age ?? 'N/A'}</td>
            <td>{String(user.createdAt) || 'N/A'}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default UsersTable;
