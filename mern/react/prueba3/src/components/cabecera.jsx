import React, { useEffect, useState } from 'react';
import { useContext } from 'react';
import { Col, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Contexto from '../contexts/contexto';
import Swal from 'sweetalert2';

const Cabecera = () => {

    const [hora, setHora] = useState(new Date().toLocaleTimeString());
    const contexto = useContext(Contexto);


    useEffect(() => {
        let int = setInterval(()=> {
          setHora(new Date().toLocaleTimeString());
        }, 1000);
        
        return function clear() {
          clearInterval(int);
        }
      }, [])

    useEffect(()=> {
        Swal.fire('Cambio de usuario', `El usuario registrado es ${contexto.usuario.nombre}`, 'warn' );
    }, [contexto.usuario.nombre])

    return (
        <React.Fragment>
            <Row>
                <Col><h1>La hora es: {hora}</h1></Col>
                <Col>
                    <Link to={'/add'}>Nuevo</Link>
                </Col>
                <Col>
                    {contexto.usuario.nombre}<br/>
                    {contexto.usuario.email}
                </Col>
            </Row>
        </React.Fragment>
    )
}

export default Cabecera;