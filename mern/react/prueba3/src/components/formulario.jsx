import React, {useEffect, useState} from "react";
import { Button, Col, Form, Row } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";

const estadoInicial = {
    nombre:'',
    email: '',
    fono:''
}

const Formulario = ({agregarFn, dato, editarFn}) => {

    const [formulario, setFormulario] = useState(estadoInicial);
    const [edicion, setEdicion] = useState(false);

    const navigate = useNavigate();

    const actualizaFormulario = ({target: {name, value}}) => {
        setFormulario({
            ...formulario,
            [name]: value
        })
    }


    const guardar= e => {
        e.preventDefault();
        let resp = true;
        if(!edicion) {
            agregarFn(formulario);
        } else {
            resp = editarFn(formulario);
        }
        if(resp) {
            navigate('/');
        }
    }

    useEffect(()=> {
        if(dato && dato.indice >= 0) {
            setEdicion(true);
            setFormulario(dato);
        }
    }, [dato])

    return (
        <React.Fragment>
            <Form onSubmit={guardar}>
                <Form.Group className="mb-3">
                    <Form.Label>Nombre</Form.Label>
                    <Form.Control type="text" placeholder="Nombre..." name="nombre" value={formulario.nombre} onChange={actualizaFormulario} required minLength={2}/>
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Label>Email</Form.Label>
                    <Form.Control type="email" placeholder="Email..." name="email" value={formulario.email} onChange={actualizaFormulario} required minLength={4}/>
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Label>Fono</Form.Label>
                    <Form.Control type="number" placeholder="Fono..." name="fono" value={formulario.fono} onChange={actualizaFormulario} max={9999999999}/>
                </Form.Group>

                <Row>
                    <Col><Button variant="primary" type="submit">{edicion?'Guardar':'Crear'}</Button></Col>
                    <Col><Link className="btn btn-secondary" to={'/'}>Volver</Link></Col>
                </Row>
            </Form>            
        </React.Fragment>
    )
}

export default Formulario;