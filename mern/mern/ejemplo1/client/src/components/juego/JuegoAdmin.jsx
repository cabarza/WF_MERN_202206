import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { Button, Col, Row } from "reactstrap";
import axios from 'axios';
import Swal from 'sweetalert2';
import { useContext } from "react";
import UserContext from "../contextos/user-context";


const JuegoAdmin = props => {

    const [juegos, setJuegos] = useState([]);
    const context = useContext(UserContext);

    const cargarJuegos = juegos => {
        if( juegos ) {
            setJuegos(juegos);
        }
    }

    const crearJuego = () => {
        axios.post('/api/v1/juegos', {})
            .then(resp => {
                if(!resp.data.error) {
                    cargarJuegos(resp.data.datos);
                } else {
                    Swal.fire('Ooops!!!', resp.data.mensaje, 'error');
                }
            })
    }

    const cambiarEstado = id => {
        axios.put(`/api/v1/juegos/${id}`)
            .then(resp =>{
                if(!resp.data.error) {
                    cargarJuegos(resp.data.datos);
                    context.socket.emit('cambioEstado', resp.data.datos);
                } else {
                    Swal.fire('Ooops!!!', resp.data.mensaje, 'error');
                }
            })
    }

    useEffect(() => {
        axios.get('/api/v1/juegos')
            .then(resp => {
                if(!resp.data.error) {
                    cargarJuegos(resp.data.datos);
                }
            })

        context.socket.on('notificaCambioestado', data => cargarJuegos(data));
    }, []);

    return (
        <React.Fragment>
            <Row>
                <Button type="button" className="btn btn-success" onClick={crearJuego}>Nuevo juego</Button>
            </Row>
            <Row>
                {juegos.map((juego, i) => (
                    <Col xs={12} md={3} lg={4}>
                        <h1>Juego: #{juego._id}</h1>
                        <ul>
                            {juego.juego.map((j, i) => (
                                <li key={i} className="mb-2">{j.jugador?.nombre} <span style={{backgroundColor: j.estado == 'PREPARANDOSE'?'green': j.estado == 'JUGANDO'?'yellow':'red' }} onClick={e => cambiarEstado(j.id)}>{j.estado}</span></li>
                            ))}
                        </ul>
                    </Col>
                ))}
            </Row>

        </React.Fragment>
    )

}

export default JuegoAdmin;