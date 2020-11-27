import axios from 'axios';
import React, {useState } from 'react';
import './Login.scss'
import { useHistory } from 'react-router-dom';
import { notification } from 'antd';

const Login = (props) => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('');
    const history = useHistory();
    const handleSubmit = async (event) => {
        try {
            event.preventDefault();
            const res = await axios.post('https://clinia-dental-citas.herokuapp.com/user/login', {email,password})
            localStorage.setItem('token',res.data.token)
            notification.success({ message: 'Logueado'})
            props.setUser(res.data.user)
            history.push('/')
        } catch (error) {
            console.log('ERROR')
            notification.error({ message: 'No logueado'})
        }
    
    }
    return (
        <form className="Login" onSubmit={handleSubmit}>
            <h1>¡Login!</h1>
            <input type="email" onChange={event=>setEmail(event.target.value)} name="email" placeholder="Email" value={email} className="loginInput"/>
            <input type="password" onChange={event=>setPassword(event.target.value)} name="password" placeholder="Contraseña" value={password} className="loginInput2"/>
            <button type="submit" className="button">Login</button>
        </form>
    )
}

export default Login 