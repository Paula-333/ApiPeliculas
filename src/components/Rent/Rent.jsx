import React, { Component, Fragment } from 'react';
import './Rent.css'

class Rent extends Component{

   logout = (props)=>{
        localStorage.removeItem('token')
         props.setUser(null)
    }

    render(){
        return(
            <Fragment className="Fragment">
                <div className="alquiler">
                ¡YA HAS ALQUILADO LA PELICULA!
                Recuerda que el plazo maximo que tienes para verla son 7 dias. 
                </div>
                <button className="logout" onClick={this.logout()}>ALQUILAR</button>
            </Fragment>
            
        )
    }
}

export default Rent;