import React from 'react';
import './App.css';
import Primero from './componentes/primero/Primero';
import { Button } from 'reactstrap';

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      nombre: '',
      apellido: '',
      edad:10
    }
  }

  clickMe = (e) => {
    this.setState({
      ...this.state, edad: this.state.edad+1
    })
  }


  cambiarEstado = (e) => {
    console.log(e.target.name);
    this.setState({
      ...this.state,
      [e.target.name]: e.target.value
    })

  }

  formSubmit = (e) => {
    console.log(this.state);
    e.preventDefault();
  }

  restarEdad = (e) => {
    this.setState({
      ...this.state, edad: this.state.edad-1
    })
}

  render() {
    return (
      <div className="App">
        <h1> Esta es mi primer REACT </h1>
        <Primero titulo={'Estes es un props'} objeto={{nombre: 'OBJ', tipo:'Cualquiera'}} 
          nombre={this.state.nombre} apellido={this.state.apellido} edad={this.state.edad} funcion={this.restarEdad}>
            <ul>
              <li>Este es un hijo</li>
              <li>Este es otro hijo</li>
            </ul>
        </Primero>

        <form onSubmit={this.formSubmit}>
          <input type='text' name='nombre' value={this.state.nombre} onChange={this.cambiarEstado}></input><br/>
          <input type='text' name='apellido' value={this.state.apellido} onChange={this.cambiarEstado}></input><br/>
          <button type='submit'>Enviar</button>
        </form>

        <Button type='button' onClick={this.clickMe}>Click Me!!!</Button>

      </div>
    );
  }
}

export default App;
