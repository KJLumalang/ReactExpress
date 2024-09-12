import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function AddUserPage() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');
  const navigate = useNavigate();

  const handleAddUser = async (e) => {
    e.preventDefault();
    const token = localStorage.getItem('token');

    try {
      const response = await axios.post('http://localhost:5000/users', {
        username,
        password
      }, {
        headers: {
          Authorization: `Bearer ${token}` // Attach the JWT token
        }
      });
      setMessage('User added successfully!');
      navigate('/users'); // Redirect to users list after adding
    } catch (error) {
      setMessage('Failed to add user.');
    }
  };

  return (
    <div className="h-screen flex justify-center items-center bg-gray-100">
      <form className="bg-white p-6 rounded shadow-md w-full max-w-sm" onSubmit={handleAddUser}>
        <h2 className="text-2xl font-bold mb-4 text-center">Add User</h2>
        <label className="block mb-2">
          Username:
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="border border-gray-300 p-2 rounded w-full"
            required
          />
        </label>
        <label className="block mb-4">
          Password:
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="border border-gray-300 p-2 rounded w-full"
            required
          />
        </label>
        <button type="submit" className="bg-blue-500 text-white p-2 rounded w-full">
          Add User
        </button>
        {message && <p className="mt-4 text-center text-green-500">{message}</p>}
      </form>
    </div>
  );
}

export default AddUserPage;
