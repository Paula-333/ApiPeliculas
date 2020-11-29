/* eslint-disable jsx-a11y/alt-text */
import React from "react";


class PeliculasItem extends React.Component {
    
    constructor (props) {
        super(props);
        
        this.state = {
            peliculaEs: {}
        }
    };

    componentDidMount(){
        let res = JSON.parse(localStorage.getItem('datosPelicula'));

        this.setState({peliculaEs:res});

    }

    goBack(){
        this.props.history.push('/');
    }

    datosPeli(){
        if(this.state.peliculaEs?.id){
            return(
                <div className="movie">
                     
                    <img alt={this.state.peliculaEs.title} src={this.state.peliculaEs.poster_path}></img>
                    <div className="titulo"> {this.state.peliculaEs.title} </div>
                    <div className="descripcion"> {this.state.peliculaEs.overview} </div>
                        
                        
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
            <div>
                {this.datosPeli()}
                <button onClick={()=>this.goBack()}>ATRAS</button>
            </div>
        );
    };
    
    
};


export default PeliculasItem;
