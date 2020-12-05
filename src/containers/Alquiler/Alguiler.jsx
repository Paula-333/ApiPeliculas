/*import React from "react";


class Register extends React.Component {
    
    constructor (props) {
        super(props);

        this.state = {
            username: "",
            email: "",

            mensajeError: ""
        }
        
    };

    handleChange = (ev) => {
        this.setState({[ev.target.name]: ev.target.type === 'number' ? +ev.target.value : ev.target.value});

    }

    async registro(){
        //primer paso, compruebo errores...
        if(!this.state.username){
            return this.setState({mensajeError: "No has rellenado los campos obligatorios"});
        }
        //segundo paso, construyo el body a enviar en axios

        let cuerpoRegistro = {
            nombre: this.state.username,
            email: this.state.email
        }

        console.log("Voy a enviar este registro al backend....",cuerpoRegistro);
    }
    
    render() {
        return(
            <div>

                <input className="inputRegister" type="text" placeholder="Nombre de usuario" name="username" value={this.state.username}  onChange={this.handleChange} ></input>
                <input className="inputRegister" type="text" placeholder="E-mail"  name="email" value={this.state.email}  onChange={this.handleChange} ></input>
                <p>{this.state.mensajeError}</p>
                <pre>{JSON.stringify(this.state, null,2)}</pre>

                <button onClick={()=>this.registro()}>REGISTRO</button>
            </div>
        );
    };
    
    
};


export default Register;*/