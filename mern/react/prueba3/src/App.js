import React, {useEffect, useState} from 'react';
import { Container, Row } from 'react-bootstrap';
import './App.css';
import Formulario from './components/formulario';
import Listado from './components/listado';
import Swal from 'sweetalert2';
import { Route, Routes, useNavigate } from "react-router-dom";
import Cabecera from './components/cabecera';
import Contexto from './contexts/contexto';
import axios from 'axios';

function App() {

  const [data, setData] = useState([]);
  const [obj, setObj] = useState({});
  const [usuario, setUsuario] = useState({
    nombre: 'Juan',
    email: 'jj@jj.cl'
})

  const navigate = useNavigate();


  const agregar = (obj) => {
    return axios.post('http://localhost:8000/api/v1/personas', obj)
      .then(resp => {
        setData([...data, resp.data.data]);
        return true;
      }).catch(error => {
        Swal.fire('Opps!!!', error, 'error')
        return false;
      });
  }
  
  const editar = (obj) => {
    if(obj.indice>=0) {
      return axios.put(`http://localhost:8000/api/v1/personas/${obj._id}`, obj)
      .then(resp => {
        let arr = [...data];
        arr.splice(obj.indice, 1, obj);
        setData(arr);
        return true;
      }).catch(error => {
        Swal.fire('Opps!!!', error, 'error')
        return false;
      });
    } else {
      Swal.fire('Editar', 'Error al editar los datos', 'error');
      return false;
    }
  }

  const eliminar = (nombre, id) =>{
    Swal.fire({
      title: 'Eliminar', 
      text: `¿Está seguro que desea eliminar el elemento ${nombre} con el id ${id}`, 
      icon: 'question',
      showCancelButton: true,
      confirmButtonText: 'Si eliminar!!!'

    }).then(resp => {
      if(resp.isConfirmed){
        axios.delete(`http://localhost:8000/api/v1/personas/${id}`)
        .then(resp => {
          setData(data.filter(d => d._id != id))
        }).catch(error => Swal.fire('Opps!!!', error, 'error'))
      }
    })
  }

  const irAEditar = (dato, i) => {
    setObj({...dato, indice: i});
    navigate('/edit');

  }

  useEffect(()=> {
    // setTimeout(()=>{
    //   setUsuario({
    //     nombre: 'Camila',
    //     email: 'camila@test.cl'
    //   })
    // }, 5000)

    axios.get('http://localhost:8000/api/v1/personas')
      .then(resp => {
        setData(resp.data.data);
      })
  }, [])

  return (
      <Contexto.Provider value={{usuario: usuario, texto: 'Esta es otra prueba'}}>
        <Container>
          <Cabecera/>
          <Routes>
            <Route path='/' element={<Listado data={data} eliminarFn={eliminar} irAEditarFn={irAEditar} />} />
            <Route path='/add' element={<Formulario agregarFn={agregar}/>} /> 
            <Route path='/edit' element={<Formulario dato={obj} editarFn={editar}/>} /> 
          </Routes>
        </Container>
      </Contexto.Provider>
  );
}

export default App;
