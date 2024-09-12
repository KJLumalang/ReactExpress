import React, { useState } from 'react';
import axios from 'axios';
import Header from './Header';

function RegisterPage() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [message, setMessage] = useState('');

    const handleRegister = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('http://localhost:5000/register', { username, password });
            setMessage(response.data.message);
        } catch (error) {
            setMessage('Registration failed. Try again.');
        }
    };

    return (
        <div>
            <Header />
                <div className="h-screen flex justify-center items-center bg-gray-100">
                    <form className="bg-white p-6 rounded shadow-md w-full max-w-sm" onSubmit={handleRegister}>
                    <h2 className="text-2xl font-bold mb-4 text-center">Register</h2>
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
                        Register
                    </button>
                    {message && <p className="mt-4 text-center text-red-500">{message}</p>}
                    </form>
                </div>
        </div>
    );
}

export default RegisterPage;
