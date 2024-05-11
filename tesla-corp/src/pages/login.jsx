import React, { useState } from "react";
import { ToastContainer, toast } from "react-toastify";

import "react-toastify/dist/ReactToastify.css";
import "../styles/login.css";


function Login() {

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await fetch('https://dummyjson.com/auth/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    username,
                    password,
                    expiresInMins: 30,
                }),
            });

            const data = await response.json();
            if (data.token) {
                setTimeout(() => {
                    window.location.href = ("/dashboard")
                }, 1000)
                localStorage.setItem('token', data.token)
                toast.success("Login successful. Redirecting to dashboard!");

            }
            else {
                toast.error("Please enter proper credentials!");
            }
        } catch (error) {
            toast.error("Please enter proper credentials");
        }
    };


    return (
        <>
            <div className="login-container">
                <div className="header text-heavy">Tesla Corp</div>
                <div className="sub-header">
                    <div className="text-heavy primary-text">Login to your dashboard</div>
                    <div className="text-light secondary-text">Enter with your username and password</div>
                </div>
                <form onSubmit={handleSubmit} className="form-container">
                    <div className="input-parent">
                        <input
                            type="text"
                            value={username}
                            className="text-medium input rounded-7 secondary-color"
                            placeholder="Username"
                            onChange={(e) => setUsername(e.target.value)}
                        />
                        <input
                            type="password"
                            value={password}
                            className="text-medium input rounded-7 secondary-color"
                            placeholder="Password"
                            onChange={(e) => setPassword(e.target.value)}
                        />
                        <button type="submit" className="submit font-medium secondary-text rounded-7">Login</button>
                    </div>
                </form>
                <div className="flex">
                    <div className="divider"></div>
                    <div className="secondary-text text-light secondary-color w-full">or continue with</div>
                    <div className="divider"></div>
                </div>
                <button className="w-full rounded-7 font-medium secondary-text btn-google" onClick={() => toast.error("Error connceting to Google Servers!")}>
                    <img src="./images/Google.svg" alt="Google" />
                    <span>Google</span>
                </button>
                <div className="footer" >
                    <span className="secondary-color">By clicking continue, you agree to our </span>
                    <span>Terms of Service </span>
                    <span className="secondary-color">and </span>
                    <span>Privacy Policy</span>
                </div>
            </div >
            <ToastContainer position="top-center" />
        </>
    )
}
export default Login;