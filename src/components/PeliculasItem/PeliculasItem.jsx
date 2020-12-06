/* eslint-disable no-useless-constructor */
/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable jsx-a11y/alt-text */
import React, {Component} from "react";
import './PeliculasItem.css';


class PeliculasItem extends Component {
    
    constructor (props) {
        super(props);
        
        this.state = {
            pelicula: {}
        }
    };

    componentDidMount(){
        let res = JSON.parse(localStorage.getItem('datosPelicula'));

        this.setState({pelicula:res});

    }

    goBack(){
        this.props.history.push('/');
    }

    datosPeli(){
        if(this.state.pelicula?.id){
            return(
                <div className="peli">
                     
                    <img className="imagen" alt={this.state.pelicula.title} src= { `https://image.tmdb.org/t/p/w300${this.state.pelicula.poster_path}`}  ></img>
                    <div className="titulo"> {this.state.pelicula.title} </div>
                    <div className="Fecha"><p>Fecha de estreno: {this.state.pelicula.release_date} </p></div>
                    <div className="descripcion"> {this.state.pelicula.overview} </div>
                 
                        
                        
                </div>
            )
        }else{
            return(
                <div>CARGANDO LOS DATOS...</div>
            )
        }
       
    }
    
    render() {
        return(
            <div className="movie">
                {this.datosPeli()}
                <button className="atras" onClick={()=>this.goBack()}>ATRAS</button>
            </div>
        );
    };
    
    
};


export default PeliculasItem;