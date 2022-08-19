import React from 'react';
import { Link, Route, Routes } from 'react-router-dom';
import { Col, Row } from 'reactstrap';
import JugadorAdmin from './jugador/JugadorAdmin';


const Main = () => {

    return (
        <React.Fragment>
            <Row>
                <Col xs={12} md={6} lg={3}><Link className='btn btn-primary' to={'/jugador/listado'}>Jugador Admin</Link></Col>
                <Col xs={12} md={6} lg={3}><Link className='btn btn-primary' to={'/jugador'}>Juego Admin</Link></Col>
            </Row>
            <Routes>
                <Route path="/jugador/*" element={<JugadorAdmin />} />
            </Routes>

        </React.Fragment>
    )
}

export default Main;