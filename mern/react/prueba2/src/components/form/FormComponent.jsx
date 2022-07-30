import React from "react";
import { useState } from "react";
import { Button, Col, Form, Row } from "react-bootstrap";
import Swal from "sweetalert2";

const dataInicial = {
    nombre: '',
    apellido: '',
    email:'',
    sexo:'',
    descripcion:'',
    checkbox: false,
    opcion:'',
    fecha: new Date(),
    clave: '',
    clave2: ''
}

const FormComponent = () => {

    const [formulario, setFormulario] = useState(dataInicial);

    const actualizaFormulario= e => {
        const {name, value} = e.target;
        setFormulario({
            ...formulario,
            [name]: value
        });
    }
    
    const actualizaFormularioChek = e => {
        const {name, checked} = e.target;
        setFormulario({
            ...formulario,
            [name]: checked
        });
    }

    const validarClaves = (clave, clave2) => {
        if(clave != clave2) {
            Swal.fire('Clave Invalida', 'Las claves deben ser iguales', 'error');
            return false;
        } else if(clave.length < 6 || clave2.length < 6) {
            Swal.fire('Clave Invalida', 'La clave debe tener almenos 6 caracteres', 'error');
            return false;
        }
        return true;
    }


    const guardar = e => {
        e.preventDefault();
        if(validarClaves(formulario.clave, formulario.clave2)) {
            console.log(formulario);
        }
    }


    return (
        <React.Fragment>
            <Form onSubmit={guardar}>
                <Form.Group className="mb-3">
                    <Form.Label>Nombre</Form.Label>
                    <Form.Control type="text" placeholder="Nombre..." name="nombre" value={formulario.nombre} onChange={actualizaFormulario} required/>
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Label>Apellido</Form.Label>
                    <Form.Control type="text" placeholder="Apellido..." name="apellido" value={formulario.apellido} onChange={actualizaFormulario}/>
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Label>Email</Form.Label>
                    <Form.Control type="email" placeholder="Email..." name="email" value={formulario.email} onChange={actualizaFormulario}/>
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Label>Fecha</Form.Label>
                    <Form.Control type="date" placeholder="Fecha..." name="fecha" value={formulario.fecha} onChange={actualizaFormulario}/>
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Label>Clave</Form.Label>
                    <Form.Control type="password" placeholder="Clave..." name="clave" value={formulario.clave} onChange={actualizaFormulario} minLength={6}/>
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Label>Clave 2</Form.Label>
                    <Form.Control type="password" placeholder="Clave 2..." name="clave2" value={formulario.clave2} onChange={actualizaFormulario} minLength={6}/>
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Label>Sexo</Form.Label>
                    <Form.Select name="sexo" value={formulario.sexo} onChange={actualizaFormulario}>
                        <option value="">Seleccione</option>
                        <option value="F">Femenino</option>
                        <option value="M">Masculino</option>
                    </Form.Select>
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Label>Descripción</Form.Label>
                    <Form.Control as="textarea" placeholder="Texto largo..." name="descripcion" value={formulario.descripcion} onChange={actualizaFormulario}/>
                </Form.Group>
                <Form.Group className="mb-3" >
                    <Form.Check type="checkbox" label="Check me out" name="checkbox" checked={formulario.checkbox} onChange={actualizaFormularioChek}/>
                </Form.Group>

                <Form.Group className="mb-3" >
                    <Form.Check type="radio" label="OPT 1" name="opcion" value="OPT1" onChange={actualizaFormulario}/>
                </Form.Group>
                <Form.Group className="mb-3" >
                    <Form.Check type="radio" label="OPT 2" name="opcion" value="OPT2" onChange={actualizaFormulario}/>
                </Form.Group>

                <Row>
                <Col><Button variant="primary" type="submit">Buscar</Button></Col>
                    {formulario.checkbox && <Col><Button variant="primary" type="button" >Limpiar</Button></Col>}
                </Row>
            </Form>
        </React.Fragment>
    )

}

export default FormComponent;