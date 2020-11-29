import React, {Component} from "react";
import './Peliculas.css';
import axios from 'axios';

class Peliculas extends Component {
    
    constructor (props) {
        super(props);

        this.state = {
            peliculas : []
        }
        
    };

    async componentDidMount(){
        
        try {
            const resultados = await axios.get('https://developers.themoviedb.org/3/movies/get-popular-movies');
            console.log(resultados.data.results);
            this.setState({peliculas: resultados.data.results})
        }catch (err){
            console.log(err);
        }
        
        
    }

    muestraResultados(){

        if(this.state.peliculas[0]){

            return(
                this.state.peliculas.map(pelicula => {
                    return(
                        <div className="personaje" key={pelicula.id}>
                            {pelicula.name}
                            <img onClick={()=>this.clickElementoSeleccionado(pelicula)} alt={pelicula.name} src={pelicula.image}></img>
                            {pelicula.species}
                        </div>
                    )
                })
            )

        }else{
            return(
                <div>CARGANDO LOS DATOS.</div>
                )
        }
        
    }

    clickElementoSeleccionado(pelicula){
        
        this.props.history.push('/peliculasItem');
        localStorage.setItem('datosPersonaje', JSON.stringify(pelicula));
    }

    
    
    render() {
        return(
            <div className="pelis">
                {this.muestraResultados()}
            </div>
        );
    };
    
    
};


export default Peliculas;