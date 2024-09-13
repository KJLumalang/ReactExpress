import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function UsersPage() {
  const [users, setUsers] = useState([]);
  const [message, setMessage] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    const fetchUsers = async () => {
      const token = localStorage.getItem('token');

      try {
        const response = await axios.get('http://localhost:5000/users', {
          headers: {
            Authorization: `Bearer ${token}` // Attach JWT token in request headers
          }
        });
        setUsers(response.data.users);
      } catch (error) {
        setMessage('Failed to fetch users. Please login again.');
      }
    };

    fetchUsers();
  }, []);

  // Logout function
  const handleLogout = () => {
    localStorage.removeItem('token'); // Clear the token from localStorage
    navigate('/login'); // Redirect to login page
  };

  const handleAddUser = () => {
    navigate('/add-user'); // Redirect to login page
  };

  return (
    <div className="h-screen p-6 bg-gray-100">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold">Users List</h1>
        <div className="flex space-x-4">
          <button 
            onClick={handleAddUser}
            className="bg-blue-500 text-white px-4 py-2 rounded"
          >
            Add User
          </button>
          <button
            onClick={handleLogout}
            className="bg-red-500 text-white px-4 py-2 rounded"
          >
            Logout
          </button>
        </div>
      </div>
      {message && <p className="text-red-500">{message}</p>}
      <ul className="bg-white shadow-md rounded p-4">
        {users.map(user => (
          <li key={user.id} className="mb-2 border-b pb-2">
            {user.username}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default UsersPage;
