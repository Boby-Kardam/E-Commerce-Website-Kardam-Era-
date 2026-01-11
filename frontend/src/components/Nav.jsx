import React from 'react';
import {Link,useNavigate} from 'react-router-dom';
import '../App.css';

function Nav(){
    const auth = localStorage.getItem('user');
    const navigate = useNavigate();
    const logout = () => {
        localStorage.clear();
        navigate('/signup');
    }
    return (
        <div>
            <img className='logo' src="https://freedesignfile.com/upload/2017/12/Shopping-logo-creative-vector.jpg" alt="" />
           { auth ?  <ul className='nav-ul' style={{
                padding:'5px',
                margin:0,
                backgroundColor:'skyblue'
            }}>
                <li><Link to='/'>Products</Link></li>
                <li><Link to='/add'>Add Products</Link></li>
                <li><Link to='/update'>Update Products</Link></li>
                <li><Link to='/profile'>Profile</Link></li>
                <li><Link onClick={logout} to='/signup' className='logout'>Logout ({JSON.parse(auth).name})</Link></li>
            </ul> : 
            <ul className='nav-ul' style={{
                padding:'5px',
                margin:0,
                backgroundColor:'skyblue',
                textAlign:'right'
            }}>
                <li><Link to='/signup'>Sign Up</Link></li>
                <li><Link to='/login'>Login</Link></li>
            </ul>
            }
        </div>
    )
}

export default Nav;