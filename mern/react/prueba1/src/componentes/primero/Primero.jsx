import React from 'react';

class Primero extends React.Component {


    

    render() {
        const { titulo, objeto, children: hijos, edad } = this.props;



        return (
            <React.Fragment>
                <h1>Edad: {edad}</h1>
                <h2> Este es un componente de React </h2>
                <h3>La propiedad Titulo es: {titulo}</h3>
                <h3>El nombre del objeto es: { objeto? objeto.nombre : '' }</h3>
                <h1>El nombre es {this.props.nombre} y el apellido es {this.props.apellido}</h1>

                <button type='button' onClick={this.props.funcion}>Soy mas joven!!!</button>
            </React.Fragment>
        )
    }

}

export default Primero;