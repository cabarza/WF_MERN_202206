import React from 'react';
import logo from './logo.svg';
import './App.css';
import Primero from './componentes/primero/Primero';

class App extends React.Component {


  constructor(props) {
    super(props);
    this.state = {
      nombre: '',
      apellido: ''
    }
  }

  clickMe= (e) => {
    alert('Este evento corresponde a un click pero como función');
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

  render() {
    return (
      <div className="App">
        <h1> Esta es mi primer REACT </h1>
        <Primero titulo={'Estes es un props'} objeto={{nombre: 'OBJ', tipo:'Cualquiera'}} nombre={this.state.nombre} apellido={this.state.apellido}>
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

        <button type='button' onClick={this.clickMe}>Click Me!!!</button>

      </div>
    );
  }
}

export default App;
