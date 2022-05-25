import React, { useState, useContext} from 'react';
import axios from 'axios';
import { useNavigate, useLocation } from 'react-router-dom';

import { AuthContext } from '../../context/AuthContext';
import './Login.css';

const Login = () => {
    const [credentials, setCredentials] = useState({
        email: undefined,
        password: undefined,
    });

    const { loading, error, dispatch } = useContext(AuthContext);
    const { state } = useLocation();
    const from = state?.from || '/';

    const navigate = useNavigate();

    const handleLogin = async (e) => {
        e.preventDefault();
        dispatch({ type: 'LOGIN_START' });
        try {
            const res = await axios.post("/auth/login", credentials);
            dispatch({ type: 'LOGIN_SUCCESS', payload: res.data.details });
            navigate(from);
        } catch (error) {
            dispatch({ type: 'LOGIN_FAILURE', payload: error.response.data });
        }
    }
  return (
    <div className='login'>
        <div className="lContainer">
            <input 
                type="email" 
                className="lInput" 
                placeholder='Email'
                name='email'
                onChange={(e) => setCredentials({...credentials, email: e.target.value})}
            />
            <input 
                type="password"
                className="lInput"
                placeholder='Password'
                name='password'
                onChange={(e) => setCredentials({...credentials, password: e.target.value})}
            />
            <button 
                className="lButton"
                type='button'
                disabled= {loading}
                onClick = {handleLogin}
            >
                Login
            </button>
            { error && <span className='error'>{error.message}</span>}
        </div>
    </div>
  )
}

export default Login