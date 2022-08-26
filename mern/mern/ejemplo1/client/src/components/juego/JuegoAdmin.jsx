import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { Button, Col, Row } from "reactstrap";
import axios from 'axios';
import Swal from 'sweetalert2';


const JuegoAdmin = props => {

    const [juegos, setJuegos] = useState([]);

    const crearJuego = () => {
        axios.post('/api/v1/juegos', {})
            .then(resp => {
                if(!resp.data.error) {
                    setJuegos([...juegos, resp.data.datos])
                } else {
                    Swal.fire('Ooops!!!', resp.data.mensaje, 'error');
                }
            })
    }

    useEffect(() => {
        axios.get('/api/v1/juegos')
            .then(resp => {
                if(!resp.data.error) {
                    setJuegos(resp.data.datos);
                }
            })
    }, []);

    return (
        <React.Fragment>
            <Row>
                <Button type="button" className="btn btn-success" onClick={crearJuego}>Nuevo juego</Button>
            </Row>
            <Row>
                {juegos.map((juego, i) => (
                    <Col>
                        <h1>Juego: #{juego._id}</h1>
                        <ul>
                            {juego.juego.map((j, i) => (
                                <li>{j.jugador[0]?.nombre} {j.estado}</li>
                            ))}
                        </ul>
                    </Col>
                ))}
            </Row>

        </React.Fragment>
    )

}

export default JuegoAdmin;