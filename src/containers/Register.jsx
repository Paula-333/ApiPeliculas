import React from 'react'
import './Register.scss';
import axios from 'axios'
import { useHistory } from 'react-router-dom';
import { notification } from 'antd'

const Register = () => {

    const history = useHistory();
    const handleSubmit = async (event) => {
        try {
            event.preventDefault();
            const form = event.target;
            const user = {
                name: form.name.value,
                lastname: form.lastname.value,
                number: form.number.value,
                email: form.email.value,
                password: form.password.value,
            }
            await axios.post('https://clinia-dental-citas.herokuapp.com/user/createUser', user)
            notification.success({ message: 'Registrado'})
            history.push('/login')
        } catch (error) {
            console.log('ERROR')
            notification.error({ message: 'Error en registrarse',})
        }

    }

    return (
        <form className="Register1" onSubmit={handleSubmit}>
            <h1>¡Registrate!</h1>
            <input type="text" name="name" placeholder="Nombre" />
            <input type="text" name="lastname" placeholder="Apellidos" />
            <input type="text" name="number" placeholder="Telefono" />
            <input type="email" name="email" placeholder="Email" />
            <input type="password" name="password" placeholder="Contraseña" />
            <button type="submit">Register</button>
        </form>
    )
}

export default Register;