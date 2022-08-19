import { Table } from "reactstrap";
import { AiFillDelete, AiFillEdit } from 'react-icons/ai'
import { Link } from "react-router-dom";

const Listado = ({datos, eliminarFn}) => {

    return (
        <Table>
            <thead>
                <tr>
                    <th>Nombre</th>
                    <th>Posición</th>
                    <th>Eliminar</th>
                    <th>Editar</th>
                </tr>
            </thead>
            <tbody>
                { datos.map((j, i) => (
                    <tr key={i}>
                        <td>{j.nombre}</td>
                        <td>{j.posicion}</td>
                        <td><AiFillDelete color="red" onClick={e => eliminarFn(j)}/> </td>
                        <td><Link to={`/jugador/editar/${j._id}`} ><AiFillEdit color="blue"/> </Link></td>
                    </tr>
                ))}
            </tbody>
        </Table>
    )
}

export default Listado;