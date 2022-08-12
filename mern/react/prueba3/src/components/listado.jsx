import React from "react";
import Table from 'react-bootstrap/Table';
import {AiFillEdit, AiFillDelete} from 'react-icons/ai';

const Listado = ({data, eliminarFn, irAEditarFn}) => {

    return (
        <React.Fragment>
            <Table>
                <thead>
                    <tr>
                        <th>Editar</th>
                        <th>Eliminar</th>
                        <th>Nombre</th>
                        <th>Email</th>
                        <th>Fono</th>
                    </tr>
                </thead>
                <tbody>
                    {data && data.map((dato, i) => <tr key={i}>
                            <td><AiFillEdit color="blue" onClick={e => irAEditarFn(dato, i)}/></td>
                            <td><AiFillDelete color="red" onClick={e => eliminarFn(dato.nombre, dato._id)}></AiFillDelete></td>
                            <td style={{textDecoration: dato.eliminado?'line-through':''}}>{dato.nombre}</td>
                            <td>{dato.email}</td>
                            <td>{dato.fono}</td>
                        </tr>)
                    }
                </tbody>
            </Table>
            
        </React.Fragment>
    )
}

export default Listado;