import React, {Component} from "react";
import './Peliculas.css';
import axios from 'axios';

class Peliculas extends Component {
    
    constructor (props) {
        super(props);

        this.state = {
            peliculas : [],
            page: 1
        }
        
    };

    async componentDidMount(){
        
        try {
            const resultados = await axios.get(`https://api.themoviedb.org/3/movie/popular?api_key=b5138e06a3a9125b8c326498bbeae997&language=es-ES&page=${this.state.page}`);
            console.log(resultados.data.results);
            this.setState({peliculas: resultados.data.results})
        }catch (err){
            console.log(err);
        }
        
        
    }

    mostrarPeliculas(){

        if(this.state.peliculas[0]){
            return(
                this.state.peliculas.map(pelicula => {
                    console.log(pelicula.title)
                    return(
                        <div className="Peliculas" key={pelicula.id}>
                            {pelicula.title}
                            <img alt={pelicula.title} src={`https://image.tmdb.org/t/p/w300${pelicula.poster_path}`} onClick={()=>this.selecionarPelicula(pelicula)}></img>
                        </div>
                    
                    )
                }))         
        }else{
            return(<div>CARGANDO LOS DATOS.</div>)
        }   
    }
    
    selecionarPelicula(pelicula){
        
        this.props.history.push('/peliculasItem');
        localStorage.setItem('datosPersonaje', JSON.stringify(pelicula));
    }

    
    
    render() {
        return(
            <div> 
                 <div className="movies" >{this.mostrarPeliculas()}</div>
             </div>
        );
    };
    
    
};


export default Peliculas;