import React, { useEffect, useState } from 'react';
import api from '../../api/api';
import type { User } from '../../api/types';
import UsersTable from '../organisms/UsersTable';

const UserManagement = () => {
  const [users, setUsers] = useState<User[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetchUsers();
  }, []);

  const fetchUsers = async () => {
    try {
      const data = await api.users.getUsers();
      setUsers(data);
    } catch {
      setError('Error getting users');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="user-management-main-container">
      <h1>Users Page</h1>
      {loading ? (
        <p>Loading...</p>
      ) : error ? (
        <p className="error-message">{error}</p>
      ) : (
        <UsersTable users={users} />
      )}
    </div>
  );
};

export default UserManagement;
