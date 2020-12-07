import React from 'react'
import { useHistory } from 'react-router-dom';
import axios from 'axios'
import './Alquilar.css'

const Alquilar = () => {
    
    const history = useHistory();
    const handleSubmit = async (event) => {
        try {
            event.preventDefault();
            const form = event.target;
            const rent = {
                name: form.name.value,
                movieId: form.movieId.value,
            }
            const proxyurl = "https://cors-anywhere.herokuapp.com/";
            const url = "https://heroku-moviesbackend.herokuapp.com/order/createOrder"
            await axios.post(proxyurl + url, rent)
            console.log({message: 'Alquiler correcto'})
            history.push('/home')
        } catch (error) {
            console.log({message: 'ERROR'})
        }

    }

    return (
        <form className="rent" onSubmit={handleSubmit}>
            <h1>Alquila aqui!</h1>
            <input type="text" name="name" placeholder="Nombre" />
            <input type="text" name="movie" placeholder="Pelicula" />
            <button type="submit">Alquilar</button>
        </form>
    )
}

export default Alquilar;