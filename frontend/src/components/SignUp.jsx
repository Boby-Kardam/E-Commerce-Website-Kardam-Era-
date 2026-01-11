import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import '../App.css'

function SignUp() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    useEffect(() => {
        const auth = localStorage.getItem('user');
        if (auth) {
            navigate('/');
        }
    }, [navigate]);

    const collectData = async (e) => {
        e.preventDefault();
        // console.log(name, email, password);
        let result = await fetch('http://localhost:5000/register', {
            method: 'post',
            body: JSON.stringify({ name, email, password }),
            headers: {
                'Content-Type': 'application/json'
            },
        });
        result = await result.json();
        console.log(result);
        localStorage.setItem("user", JSON.stringify(result.result));
        localStorage.setItem("token", JSON.stringify(result.auth));
        navigate('/');
    }

    return (
        <div className='register'>
            <h1>Register</h1>
            
            <form onSubmit={collectData}>
                <input 
                    className='inputBox' 
                    type="text" 
                    value={name} 
                    onChange={(e) => setName(e.target.value)} 
                    placeholder='Enter Name' 
                    autoComplete="name"
                    required
                />

                <input 
                    className='inputBox' 
                    type="email" 
                    value={email} 
                    onChange={(e) => setEmail(e.target.value)} 
                    placeholder='Enter Email' 
                    autoComplete="email"
                    required
                />

                <input 
                    className='inputBox' 
                    type="password" 
                    value={password} 
                    onChange={(e) => setPassword(e.target.value)} 
                    placeholder='Enter Password' 
                    autoComplete="new-password"
                    required
                />

                <button type="submit" className='signButton'>Sign Up</button>
            </form>
        </div>
    )
}

export default SignUp