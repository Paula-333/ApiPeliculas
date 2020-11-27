import React from "react";
import './Home.css'

const Home = (props) =>{

    //const titulo = "WELCOME!";
    let foto = {photo:'./Neon.jpg'}

   
    
   
        return(
            <div className="Home">
                <img src={foto.photo} alt="Dientes" className="foto"/> 
            </div>
        );
    
}



export default Home;