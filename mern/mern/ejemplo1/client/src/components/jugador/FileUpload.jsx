import axios from 'axios';
import React, {useState} from 'react';
import { Form, Input } from 'reactstrap';

const FileUpload = props => {

    const [file, setFile] = useState();
    const [uploadedFile, setUploadedFile] = useState();


    const fileSelected = e => {
        setFile(e.target.files[0]);
    }

    const fileUpload = e => {
        e.preventDefault();
        console.log(e);
        const formData = new FormData();
    
        // Update the formData object
        formData.append(
            "archivo",
            file,
            file.name
        );
        axios.post("/api/v1/jugadores/upload", formData, {responseType: 'blob', headers: {'content-type': 'multipart/form-data'}})
            .then(resp => {
                const reader = new FileReader();
                reader.readAsDataURL(new Blob([resp.data]));
                reader.onloadend = () => {
                    setUploadedFile(reader.result);
                };
            });
    }



    return (
        <React.Fragment>
            <Form encType="multipart/form-data" onSubmit={fileUpload}>
                <Input type="file" name="archivo" onChange={fileSelected}/>
                <Input type='submit' value="Subir"></Input>
            </Form>
            <img src={uploadedFile} />

        </React.Fragment>
    )
}

export default FileUpload;