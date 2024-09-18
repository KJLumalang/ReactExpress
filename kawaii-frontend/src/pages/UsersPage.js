import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { Button, Typography, Alert } from '@mui/material';
import TableComponent from '../components/TableComponent'; // Import the reusable table component

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

	// Update user handler
	const handleUpdateUser = (id) => {
		// Redirect to update page for the user with the given ID
		navigate(`/update-user/${id}`);
	};

	// Delete user handler
	const handleDeleteUser = async (id) => {
		const token = localStorage.getItem('token');
		try {
			await axios.delete(`http://localhost:5000/users/${id}`, {
			headers: {
				Authorization: `Bearer ${token}`
			}
			});
			setUsers(users.filter((user) => user.id !== id)); // Remove user from the list
		} catch (error) {
			setMessage('Failed to delete user.');
		}
	};



	const columns = [
		{ field: 'username', headerName: 'Username' }
	];

	return (
		<div className="h-screen p-6 bg-gray-100">
			<div className="flex justify-between items-center mb-6">
				<Typography variant="h4" component="h1">Users List</Typography>
				<div className="flex space-x-4">
				<Button variant="contained" color="primary" onClick={handleAddUser}>
					Add User
				</Button>
				<Button variant="contained" color="secondary" onClick={handleLogout}>
					Logout
				</Button>
				</div>
			</div>

			{message && <Alert severity="error">{message}</Alert>}

			<TableComponent 
				columns={columns} data={users} 
				onUpdate={handleUpdateUser}  // Pass update handler
       			onDelete={handleDeleteUser}  // Pass delete handler
			/>
		</div>
	);
}

export default UsersPage;
