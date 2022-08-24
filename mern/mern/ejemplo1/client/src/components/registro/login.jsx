import axios from "axios";
import React, { useState } from "react";
import Swal from "sweetalert2";

import { Button, Form, FormGroup, Input, Label } from 'reactstrap';
import { useContext } from "react";
import UserContext from "../contextos/user-context";
import { Link, useNavigate } from "react-router-dom";


const dataInicial = {
    username: '',
    password: ''
}

const Login = () => {

    const [formulario, setFormulario] = useState(dataInicial);
    const context = useContext(UserContext);
    const navigate = useNavigate();

    const actualizarFormulario = ({target: {name, value}}) => {
        setFormulario({
            ...formulario,
            [name]: value
        })
    }

    const login = e => {
        e.preventDefault();
        axios.post('/api/v1/login', formulario)
            .then(respuesta => {
                if(!respuesta.data.error) {
                    context.setUsuario(respuesta.data.datos);
                    sessionStorage.setItem('USUARIO', JSON.stringify(respuesta.data.datos));
                    navigate('/');
                } else {
                    Swal.fire('Login', respuesta.data.mensaje, "error");
                }
            })
    }

    return (
        <React.Fragment>
            <Form onSubmit={login}>
                <FormGroup>
                    <Label>Nombre</Label>
                    <Input type="text" name="username" required  value={formulario.username} onChange={actualizarFormulario}/>
                </FormGroup>
                <FormGroup>
                    <Label>Clave</Label>
                    <Input type="password" name="password" minLength={6} value={formulario.password} onChange={actualizarFormulario}/>
                </FormGroup>
                <Button type="submit">Login</Button>

            </Form>
            <Link to={'/registro'}>Registrarse</Link>

        </React.Fragment>
    )
}

export default Login;