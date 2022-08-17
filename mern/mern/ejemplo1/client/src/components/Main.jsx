import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { Col, Row } from 'reactstrap';
import JugadorAdmin from './jugador/JugadorAdmin';


const Main = () => {

    return (
        <React.Fragment>
            <Row>
                <Col xs={12}><h1>Cabecera</h1></Col>
            </Row>
            <Routes>
                <Route path="/jugador/*" element={<JugadorAdmin />} />
            </Routes>

        </React.Fragment>
    )
}

export default Main;