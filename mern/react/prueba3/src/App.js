import React, {useState} from 'react';
import { Container } from 'react-bootstrap';
import './App.css';
import Formulario from './components/formulario';
import Listado from './components/listado';
import Swal from 'sweetalert2';

function App() {

  const [data, setData] = useState([]);
  const [obj, setObj] = useState({});


  const agregar = (obj) => {
    setData([...data, obj]);
  }
  
  const editar = (obj) => {
    if(obj.indice>=0) {
      let arr = [...data];
      arr.splice(obj.indice, 1, obj);
      setData(arr);
      return true;
    } else {
      Swal.fire('Editar', 'Error al editar los datos', 'error');
      return false;
    }
  }

  const eliminar = (nombre, indice) =>{
    Swal.fire({
      title: 'Eliminar', 
      text: `¿Está seguro que desea eliminar el elemento ${nombre} en la posición ${indice}`, 
      icon: 'question',
      showCancelButton: true,
      confirmButtonText: 'Si eliminar!!!'

    }).then(resp => {
      if(resp.isConfirmed){
        setData(data.filter((d, i) => i != indice));
      }
    })
  }

  const irAEditar = (dato, i) => {
    setObj({...dato, indice: i});
  }

  return (
    <Container>
      <Formulario agregarFn={agregar} dato={obj} editarFn={editar}/>
      <hr/>
      <Listado data={data} eliminarFn={eliminar} irAEditarFn={irAEditar} />
    </Container>
  );
}

export default App;
