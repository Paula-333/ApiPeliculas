import React from "react";


class PeliculasItem extends React.Component {
    
    constructor (props) {
        super(props);
        
        this.state = {
            peliculaEs: {}
        }
    };

    componentDidMount(){
        let resultado = JSON.parse(localStorage.getItem('datosPelicula'));

        this.setState({peliculaEs : resultado});

    }

    goBack(){
        this.props.history.push('/');
    }

    muestraDatos(){
        if(this.state.personajeEscogido?.id){
            return(
                <div>
                    <div>Nombre: {this.state.peliculaEs.name}</div>
                    <div>Species: {this.state.peliculaEs.species}</div>
                    <div><img src={this.state.peliculaEs.image}></img></div>
                </div>
            )
        }else{
            return(
                <div>CARGANDO LOS DATOS DEL PERSONAJE</div>
            )
        }
        // console.log(this.state.personajeEscogido.id);
    }
    
    render() {
        return(
            <div>
                {this.muestraDatos()}
                <button onClick={()=>this.goBack()}>VOLVER A VISTA DE PERSONAJES</button>
            </div>
        );
    };
    
    
};


export default PeliculasItem;
