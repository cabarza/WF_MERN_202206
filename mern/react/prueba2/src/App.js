import React, { useState } from 'react';
import './App.css';
import {Container, Col, Row, Button} from 'react-bootstrap';
import Swal from 'sweetalert2';
import ListComponent from './components/list/ListComponent';
import SearchComponent from './components/search/SearchComponent';
import FormComponent from './components/form/FormComponent';

const App = () => {
  
  const [edad, setEdad] = useState(10);

  const [arreglo, setArreglo] = useState(['Uno','Dos', 'Tres', 4,5,6,7])

  const [filtroPadre, setFiltroPadre] = useState('');

  const aumentar = (e) => {
    setEdad(edad+1);
    setArreglo([...arreglo, edad]);
  }

  const disminuir = (e) => {
    if(edad == 0) {
      Swal.fire('Edad inválida', 'La edad no puede ser menor a 0', 'warning');

    } else {
      setEdad(edad-1);
    }
  }

  return (
    <Container>
      {/* <Row>
        <SearchComponent setFiltroPadre={setFiltroPadre}></SearchComponent>
      </Row>
      <Row>
        <Col sm={12} md={6} className="text-center"><h1>La edad es:{edad}</h1></Col>
        <Col sm={6} md={3}><Button type='button' onClick={aumentar}>Aumentar</Button></Col>
        <Col sm={6} md={3}><Button type='button' variant="danger" onClick={disminuir}>Disminuir</Button></Col>
      </Row>
      <ListComponent arreglo={arreglo} setArreglo={setArreglo} filtro={filtroPadre}/> */}
      <FormComponent/>
    </Container>
  );
}

export default App;
