import axios from "axios";
import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Button, Form, FormGroup, Input, Label } from "reactstrap";
import Swal from "sweetalert2";

const dataInicial = {
    nombre: '',
    posicion: ''
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
        // crearFn(formulario)
        //     .then(resp => console.log(resp));
        let respuesta = false;
        if(!id) {
            respuesta = await crearFn(formulario);
        } else {
            respuesta = await editarFn(formulario);
        }
        if(respuesta) {
            navigate('/jugador/listado')
        }
    }

    useEffect(() => {
        if(id) {
            axios.get(`http://localhost:8000/api/v1/jugadores/${id}`)
                .then(resp => {
                    if(!resp.data.error) {
                        setFormulario(resp.data.datos);
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
                <Button type="submit">Guardar</Button>
            </Form>
        </React.Fragment>
    )
}

export default Formulario;