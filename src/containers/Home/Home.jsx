import React, {Component, Fragment} from "react";
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
            const peliculas = await axios.get('https://api.themoviedb.org/3/movie/popular?api_key=479c2920a277283ba2e63633bbcc98d6');
            console.log(peliculas.data.results);
            this.setState({peliculas: peliculas.data.results})
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
   
    nextPage = () =>{
        this.setState(prevState=>({page:prevState.page+1}));
        axios.get(`https://api.themoviedb.org/3/movie/popular?api_key=b5138e06a3a9125b8c326498bbeae997&language=es-ES&page=${this.state.page}`)
        .then((api)=>{this.setState({peliculas: api.data.results})})
        .catch(err=> console.log(err))

       
    }
    
    backPage = () => {
        this.setState(prevState=>({page:prevState.page-1}));
        
    }
    
    render() {
        return(
            <Fragment > 
               <div> <img src={foto.photo} alt="cinema" className="foto"/></div> 
                <div className="movies" >{this.mostrarPeliculas()}</div>
                <div className="div-movies">
                <button className="anterior" onClick={()=> this.backPage}>ANTERIOR</button>
                <button className="siguiente" onClick={()=> this.nextPage}>SIGUIENTE</button>
                </div>
             </Fragment>
        );
    };
    
    
};


export default Home;