import React, {Component} from "react";
import './Home.css'
import axios from 'axios';

let foto = {photo:'./cinema.jpg'}



class Home extends Component {
    
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
                        <div className="movies2" key={pelicula.id}>
                            
                            <img alt={pelicula.title} src={`https://image.tmdb.org/t/p/w300${pelicula.poster_path}`} onClick={()=>this.selecionarPelicula(pelicula)}></img>
                        </div>
                    
                    )
                }))         
        }else{
            return(<div>¡CARGANDO PELICULAS!</div>)
        }   
    }
    
    selecionarPelicula(pelicula){
        
        this.props.history.push('/peliculaDescripcion');
        localStorage.setItem('datosPelicula', JSON.stringify(pelicula));
    }

    
    
    render() {
        return(
            <div> 
                <img src={foto.photo} alt="cinema" className="foto"/> 
                <div className="movies" >{this.mostrarPeliculas()}</div>
             </div>
        );
    };
    
    
};


export default Home;