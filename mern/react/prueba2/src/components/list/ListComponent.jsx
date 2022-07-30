
import { useEffect, useState } from 'react';
import {Col, Row, Button, Table} from 'react-bootstrap';
import {TbTrashX} from 'react-icons/tb';
import Swal from 'sweetalert2';

const ListComponent =({arreglo, setArreglo, filtro}) => {

    const [lista, setLista] = useState([]);

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

    useEffect(()=>{
        setLista(arreglo.filter(e => (''+e).toLowerCase().indexOf(filtro.toLowerCase())>=0));
    }, [filtro]);

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
                  {lista.map((valor, index) => <tr key={index}>
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