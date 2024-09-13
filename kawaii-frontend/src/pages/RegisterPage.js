import React from 'react';
import Header from '../components/Header';
import RegisterForm from '../components/RegisterForm';

function LoginPage() {
    return (
        <div>
            <Header />
            <div className="h-screen flex justify-center items-center bg-gray-100">
                <RegisterForm />
            </div>
        </div>
    );
}

export default LoginPage;
