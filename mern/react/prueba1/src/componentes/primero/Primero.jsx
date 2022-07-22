import React from 'react';

class Primero extends React.Component {

    render() {
        const { titulo, objeto, children: hijos } = this.props;

        return (
            <React.Fragment>
                <h2> Este es un componente de React </h2>
                <h3>La propiedad Titulo es: {titulo}</h3>
                <h3>El nombre del objeto es: { objeto? objeto.nombre : '' }</h3>
                <h1>El nombre es {this.props.nombre} y el apellido es {this.props.apellido}</h1>
            </React.Fragment>
        )
    }

}

export default Primero;