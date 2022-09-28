import axios from "axios";
import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Button, Col, Form, FormGroup, Input, Label, Row } from "reactstrap";
import Swal from "sweetalert2";

const dataInicial = {
    nombre: '',
    posicion: '',
    img: null
}

const Formulario = ({crearFn, editarFn}) => {
    
    const [formulario, setFormulario] = useState(dataInicial);
    
    const navigate = useNavigate();

    const { id } = useParams();


    const actualizarFormulario = ({target: {name, value}}) => {
        setFormulario({
            ...formulario,
            [name]: value
        })
    }

    const guardar = async e => {
        e.preventDefault();
        let respuesta = false;
        const formData = new FormData(e.target);

        if(!id) {
            respuesta = await crearFn(formData);
        } else {
            respuesta = await editarFn(formData, formulario._id);
        }
        if(respuesta) {
            navigate('/jugador/listado')
        }
    }

    useEffect(() => {
        if(id) {
            axios.get(`/api/v1/jugadores/${id}`)
                .then(resp => {
                    if(!resp.data.error) {
                        if(resp.data.datos.avatar){
                            axios.get(`/api/v1/jugadores/${resp.data.datos._id}/avatar`, {responseType:'blob'})
                            .then(r=> {
                                const reader = new FileReader();
                                reader.readAsDataURL(new Blob([r.data]));
                                reader.onloadend = () => {
                                    resp.data.datos.img=reader.result;
                                    setFormulario(resp.data.datos);
                                };
                            })
                        } else {
                            setFormulario(resp.data.datos);
                        }
                    } else {
                        Swal.fire('Ooops!!!', resp.data.mensaje, 'error');
                    }
                });
        }
    }, []);

    return (
        <React.Fragment>
            <Form onSubmit={guardar}>
                <FormGroup>
                    <Label>Nombre</Label>
                    <Input type="text" name="nombre" required minLength={2} value={formulario.nombre} onChange={actualizarFormulario}/>
                </FormGroup>
                <FormGroup>
                    <Label>Posición</Label>
                    <Input type="text" name="posicion" maxLength={30} value={formulario.posicion} onChange={actualizarFormulario}/>
                </FormGroup>
                <Row>
                    <Col xs={12} md={9}>
                        <FormGroup>
                            <Label>Avatar</Label>
                            <Input type="file" name="avatar"/>
                        </FormGroup>
                    </Col>
                    <Col xs={12} md={3}>
                        {formulario?.img && <img src={formulario.img} style={{width:'100px'}}/>}
                    </Col>
                </Row>
                <Button type="submit">Guardar</Button>
            </Form>
        </React.Fragment>
    )
}

export default Formulario;