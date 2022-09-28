import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { Link, Route, Routes } from "react-router-dom";
import { Col, Row } from "reactstrap";
import Listado from "./Listado";
import axios from 'axios';
import Swal from 'sweetalert2';
import Formulario from "./Formulario";


const JugadorAdmin = () => {
    const [datos, setDatos] = useState([]);
    const [recargar, setRecargar] = useState(false);

    const crear = (jugador) => {
        return axios.post('/api/v1/jugadores', jugador, {headers: {
            'content-type': 'form/multipart-data'
        }})
            .then(resp => {
                if(!resp.data.error) {
                    setDatos([...datos, resp.data.datos]);
                    return true;
                } else {
                    Swal.fire('Ooops!!!', resp.data.mensaje, 'error');
                    return false;
                }
            })
    }

    const editar = (jugador) => {
        return axios.put(`/api/v1/jugadores/${jugador._id}`, jugador)
            .then(resp => {
                if(!resp.data.error) {
                    setRecargar(!recargar);
                    return true;
                } else {
                    Swal.fire('Ooops!!!', resp.data.mensaje, 'error');
                    return false;
                }
            })
    }

    const eliminar = (jugador) => {
        Swal.fire({
            text: `Seguro que desea eliminar a ${jugador.nombre}?`,
            title: 'Eliminar',
            showCancelButton: true,
            confirmButtonText: 'Si',
            confirmButtonColor: 'red',
            cancelButtonText: 'No, me equivoqué!!!',
            cancelButtonColor:'green'
        }).then(resp => {
            if(resp.isConfirmed) {
                axios.delete(`/api/v1/jugadores/${jugador._id}`)
                    .then(respuesta => {
                        if(!respuesta.data.error) {
                            setRecargar(!recargar);
                        } else {
                            Swal.fire('Ooops!!!', respuesta.data.mensaje, 'error');
                        }
                    });
            }
        })
    }


    useEffect(()=> {
        axios.get('/api/v1/jugadores')
          .then(resp => {
            if(!resp.data.error) {
                setDatos(resp.data.datos);
            } else {
                Swal.fire('Ooops!!!', resp.data.mensaje, 'error');
            }
          })

    }, [recargar])

    return (
        <React.Fragment>
            <Row>
                <Col><Link to={'/jugador/listado'}>Listado</Link></Col>
                <Col><Link to={'/jugador/nuevo'}>Nuevo Jugador</Link></Col>
            </Row>
            <Routes>
               <Route path="listado" element={<Listado datos={datos} eliminarFn={eliminar}/>} />
               <Route path="nuevo" element={<Formulario crearFn={crear}/>} />
               <Route path="editar/:id" element={<Formulario editarFn={editar}/>} />
            </Routes>
        </React.Fragment>
    )
}

export default JugadorAdmin;