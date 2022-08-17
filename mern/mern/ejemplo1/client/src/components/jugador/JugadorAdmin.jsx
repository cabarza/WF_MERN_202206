import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { Link, Route, Routes } from "react-router-dom";
import { Col, Row } from "reactstrap";
import Listado from "./Listado";
import axios from 'axios';
import Swal from 'sweetalert2';


const JugadorAdmin = () => {
    const [datos, setDatos] = useState([]);


    useEffect(()=> {
        axios.get('http://localhost:8000/api/v1/jugadores')
          .then(resp => {
            if(!resp.data.error) {
                setDatos(resp.data.datos);
            } else {
                Swal.fire('Ooops!!!', resp.data.mensaje, 'error');
            }
          })

    }, [])

    return (
        <React.Fragment>
            <Row>
                <Col><Link to={'/jugador/listado'}>Listado</Link></Col>
                <Col><Link to={'/jugador/nuevo'}>Nuevo Jugador</Link></Col>
            </Row>
            <Routes>
               <Route path="listado" element={<Listado datos={datos}/>} />
            </Routes>
        </React.Fragment>
    )
}

export default JugadorAdmin;