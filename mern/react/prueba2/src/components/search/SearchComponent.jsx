import React from "react";
import { useState } from "react";
import { Button, Col, Form, Row } from "react-bootstrap";

const SearchComponent = props => {

    const [filtro, setFiltro] = useState('');

    const modificarFiltro = e => {
        setFiltro(e.target.value);
    }

    const limpiar = e => {
        setFiltro('');
        props.setFiltroPadre('');
    }

    const buscar = (e) => {
        e.preventDefault();
        props.setFiltroPadre(filtro);
    }

    return (
        <React.Fragment>
            <Form onSubmit={buscar}>
                <Form.Group className="mb-3" controlId="filtro">
                    <Form.Label>Filtro</Form.Label>
                    <Form.Control type="text" placeholder="Buscar..." value={filtro} onChange={modificarFiltro}/>
                </Form.Group>
                <Row>
                    <Col><Button variant="primary" type="submit">Buscar</Button></Col>
                    <Col><Button variant="primary" type="button" onClick={limpiar}>Limpiar</Button></Col>
                </Row>
            </Form>
        </React.Fragment>
    )
}

export default SearchComponent;
 