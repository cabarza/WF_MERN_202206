import { Table } from "reactstrap";

const Listado = ({datos}) => {

    return (
        <Table>
            <thead>
                <tr>
                    <th>Nombre</th>
                    <th>Posición</th>
                    <th>Acción</th>
                </tr>
            </thead>
            <tbody>
                { datos.map((j, i) => (
                    <tr key={i}>
                        <td>{j.nombre}</td>
                        <td>{j.posicion}</td>
                        <td></td>
                    </tr>
                ))}
            </tbody>
        </Table>
    )
}

export default Listado;