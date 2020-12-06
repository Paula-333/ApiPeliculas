import React, { Component } from 'react';
//import axios from 'axios'

class FormSearch extends Component {

    // estado inicial del state
    state = {     
        search: '',
        error: false
    }

    // Cuando el usuario escribe en los inputs
    handleChange = e => {
        // colocar lo que el usuario escribe en el state
        this.setState({
              search : e.target.value
        })
    }

    // cuando el usuario envia el formulario
    handleSubmit = e => {
        e.preventDefault();

        // extraer los valores del state
        const valueState = this.state.search;

         // validar que todos los campos esten llenos si no la pelicula no se encontro
         if(valueState === '' ) {
            this.setState({
                error: true
            });

            // detener la ejecución
            return;
         }
        
        // realizo el fetch para obtener la api con el resultado
        const apiUrl =`https://api.themoviedb.org/3/search/movie?api_key=3e62fb2a0d94f7fd5ade1348729a33cf&language=es-ES&query=${valueState}`;

        const miInit = { method: 'GET'};

        fetch(apiUrl, miInit)
        .then(response => response.json())
        .then(data => {
            // realizo filtrado para que me traiga la pelicula mas cercana que encontro
            let filterArray = data.results[0]

            // valido si filtradosearch viene undefinend y tiro un error
            if (filterArray === undefined) {
                this.setState({
                    error: true
                });
                console.log('ERROR')
                return
                
            } else {

                //paso los datos del estado para obtenerlos en ContainerAPP
                this.props.getDatosResults(filterArray)

                // Vuelvo al estado inicial 
                this.setState({
                error: false
                })
            }
        });

    }

    render() {

        // extraer valor del state
        const { error } = this.state;

        return (
                <div>
                { error ? <div className="alerta">La pelicula no se encontro</div>  
                : null  }
                    <form className="search" onSubmit={this.handleSubmit}>
                    <input 
                        type="text"
                        className="search-input"
                        name='search'
                        placeholder="Escribe la pelicula"
                        onChange={this.handleChange}
                        value={this.state.search}
                        />
                        <button type="submit" className="estilo-boton">Buscar</button>
                    </form>
                </div>
        )}
}

export default FormSearch;


