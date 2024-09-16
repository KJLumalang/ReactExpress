import React from 'react';
import Header from '../components/Header';
import LoginForm from '../components/LoginForm';

function LoginPage() {
    return (
        <div>
            <Header />
            <div className="h-screen justify-center items-center bg-gray-100">
                <LoginForm />
            </div>
        </div>
    );
}

export default LoginPage;
