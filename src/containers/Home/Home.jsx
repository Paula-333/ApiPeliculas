import React from "react";
import './Home.css'


const Home = (props) =>{
    
    let foto = {photo:'./cinema.jpg'}

    
        return(
            <div className="Home">
                <img src={foto.photo} alt="cinema" className="foto"/> 
            </div>
        );
    
}



export default Home;