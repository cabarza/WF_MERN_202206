import { Row, Table } from "reactstrap";
import { AiFillDelete, AiFillEdit } from 'react-icons/ai'
import { Link } from "react-router-dom";
import React, { useContext } from "react";
import UserContext from "../contextos/user-context";
import FileUpload from "./FileUpload";
import { useEffect } from "react";
import axios from "axios";
import { useState } from "react";

const Listado = ({datos, eliminarFn}) => {

    const [cargar, setCargar] = useState(1);

    const cargarAvatars = () => {
        datos?.forEach((d, index)=> {
            if(d.avatar) {
                axios.get(`/api/v1/jugadores/${d._id}/avatar`, {responseType:'blob'})
                    .then(resp => {
                        const reader = new FileReader();
                        reader.readAsDataURL(new Blob([resp.data]));
                        reader.onloadend = () => {
                             d.img=reader.result;
                             setTimeout(()=>{
                                 setCargar(cargar+1);
                             }, 100);
                        };
                    })
            }
        });
    }

    useEffect(()=> {
        cargarAvatars();
    }, [datos]);

    const context = useContext(UserContext);
    return (
        <React.Fragment>
            <Row>
                <FileUpload />
            </Row>
            <Table>
                <thead>
                    <tr>
                        <th>Nombre</th>
                        <th>Posición</th>
                        <th>Manager</th>
                        <th>Avatar</th>
                        <th>Eliminar</th>
                        <th>Editar</th>
                    </tr>
                </thead>
                <tbody>
                    {cargar && datos.map((j, i) => (
                        <tr key={i}>
                            <td>{j.nombre}</td>
                            <td>{j.posicion}</td>
                            <td>{j.usuario[0]?(j.usuario[0].nombre+ ' '+ j.usuario[0].apellido): ''}</td>
                            <td>{j.img && <img src={j.img} style={{width:'30px'}}/>}</td>
                            <td>
                                {(!j.usuarioId ||  context.usuario._id === j.usuarioId) && <AiFillDelete color="red" onClick={e => eliminarFn(j)}/>}
                            </td>
                            <td>
                                {(!j.usuarioId ||  context.usuario._id === j.usuarioId) && <Link to={`/jugador/editar/${j._id}`} ><AiFillEdit color="blue"/> </Link>}
                            </td>
                        </tr>
                    ))}
                </tbody>
            </Table>
        </React.Fragment>
    )
}

export default Listado;