import { Table } from "reactstrap";
import { AiFillDelete, AiFillEdit } from 'react-icons/ai'
import { Link } from "react-router-dom";
import { useContext } from "react";
import UserContext from "../contextos/user-context";

const Listado = ({datos, eliminarFn}) => {

    const context = useContext(UserContext);
    return (
        <Table>
            <thead>
                <tr>
                    <th>Nombre</th>
                    <th>Posición</th>
                    <th>Manager</th>
                    <th>Eliminar</th>
                    <th>Editar</th>
                </tr>
            </thead>
            <tbody>
                { datos.map((j, i) => (
                    <tr key={i}>
                        <td>{j.nombre}</td>
                        <td>{j.posicion}</td>
                        <td>{j.usuario[0]?(j.usuario[0].nombre+ ' '+ j.usuario[0].apellido): ''}</td>
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
    )
}

export default Listado;