import React from 'react';
import { Link, Route, Routes, useNavigate } from 'react-router-dom';
import { Button, Col, Row } from 'reactstrap';
import JuegoAdmin from './juego/JuegoAdmin';
import JugadorAdmin from './jugador/JugadorAdmin';


const Main = () => {

    const navigate = useNavigate();

    const salir = (e) => {
        sessionStorage.removeItem('USUARIO');
        navigate('/login');
    }

    return (
        <React.Fragment>
            <Row>
                <Col xs={12} md={6} lg={3}><Link className='btn btn-primary' to={'/jugador/listado'}>Jugador Admin</Link></Col>
                <Col xs={12} md={6} lg={3}><Link className='btn btn-primary' to={'/juegos'}>Juego Admin</Link></Col>
                <Col xs={12} md={6} lg={3}><Button className='btn btn-danger' onClick={salir}>Salir</Button></Col>
            </Row>
            <Routes>
                <Route path="/jugador/*" element={<JugadorAdmin />} />
                <Route path="/juegos/*" element={<JuegoAdmin />} />
            </Routes>

        </React.Fragment>
    )
}

export default Main;