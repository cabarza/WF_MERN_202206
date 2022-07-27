
import {Col, Row, Button, Table} from 'react-bootstrap';
import {TbTrashX} from 'react-icons/tb';
import Swal from 'sweetalert2';

const ListComponent =({arreglo, setArreglo}) => {

    const eliminar = (e, i) => {
        Swal.fire({
            title: '¿Está seguro?',
            text:'¿Desea eliminar el elemento?',
            showConfirmButton:true,
            showCancelButton: true,
            confirmButtonText: 'Si, eliminalo!!!'
        }).then(resp => {
            if(resp.isConfirmed) {
                const arr = arreglo.filter((v, index) => index != i);
                setArreglo(arr);
            }
        })
    }

    return (
       <Row>
        <Col xs={12}>
          <Table>
            <thead>
                <tr>
                    <th>Valor</th>
                    <th>Eliminar</th>
                </tr>
            </thead>
            <tbody>
                  {arreglo.map((valor, index) => <tr>
                    <td>{valor}</td>
                    <td><TbTrashX onClick={e => eliminar(e, index)}></TbTrashX></td>
                </tr>)}  
                
            </tbody>
          </Table>
        </Col>
      </Row>
    );
}

export default ListComponent;