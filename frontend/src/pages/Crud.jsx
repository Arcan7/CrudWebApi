import React, {useState, useEffect, Fragment} from "react";
import Table from 'react-bootstrap/Table';
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import {Card} from "react-bootstrap";
const Crud = () => {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const info = [
        {
            id : 1,
            name : 'Teste',
            age : 19,
            status : 0
        },
        {
            id : 2,
            name : 'Orat',
            age : 39,
            status : 1
        },
        {
            id : 3,
            name : 'KIU',
            age : 23,
            status : 1
        }
    ]
    const [data, setData] = useState([]);

    useEffect(()=>{
        setData(info);
    },[])

    const handleEdit = (id) =>{
        handleShow();
    }

    const [name, setName] = useState('')
    const [age, setAge] = useState('')
    const [isActive, setIsActive] = useState(0)

    const [editId, setEditId] = useState('')
    const [editName, setEditName] = useState('')
    const [editAge, setEditAge] = useState('')
    const [editIsActive, setEditIsActive] = useState(0)
    const handleDelete = (id) =>{
        if (window.confirm("Voulez-vous vraimment supprimer un user ?") == true )
        {
            alert('Deleted : ' + id)
        }
    }

    const  handleUpdate = () =>{

    }
    return(
        <Fragment>
            <Container fluid>
                <Card className="m-2">
                    <Card.Body>
                        <Form>
                            <Form.Group className="mb-3">
                                <Form.Label>Name</Form.Label>
                                <Form.Control type="text" placeholder="Enter Name" value={name}
                                              onChange={(e)=> setName(e.target.value)}
                                />
                            </Form.Group>

                            <Form.Group className="mb-3">
                                <Form.Label>Age</Form.Label>
                                <Form.Control type="text" placeholder="Enter Age" value={age}
                                              onChange={(e)=> setAge(e.target.value)}
                                />
                            </Form.Group>
                            <Form.Group className="mb-3">
                                <Form.Check type="checkbox" label="IsActive" checked={isActive === 1 ? true : false}
                                            onChange={(e)=> setIsActive(e)} value={isActive}
                                />
                            </Form.Group>
                            <Button variant="primary" type="submit">
                                Submit
                            </Button>
                        </Form>
                    </Card.Body>
                </Card>
            </Container>
            <Card className="m-4">
                <Card.Body>
                    <Table striped bordered hover className="text-center">
                        <thead>
                        <tr>
                            <th>#</th>
                            <th>Name</th>
                            <th>Age</th>
                            <th>Status</th>
                            <th>Actions</th>
                        </tr>
                        </thead>
                        <tbody>
                        {
                            data && data.length > 0 ?
                                data.map((item, index) => {
                                    return (
                                        <tr Key={index}>
                                            <td>{index + 1}</td>
                                            <td>{item.name}</td>
                                            <td>{item.age}</td>
                                            <td>{item.status}</td>
                                            <td colSpan={2}>
                                                <button className="btn btn-primary" onClick={()=> handleEdit(item.id)}>Edit</button> &nbsp;
                                                <button className="btn btn-danger" onClick={()=> handleDelete(item.id)}>Delete</button>
                                            </td>
                                        </tr>
                                    )
                                })
                                :
                                'Loading...'
                        }
                        </tbody>
                    </Table>
                    <Modal show={show} onHide={handleClose}>
                        <Modal.Header closeButton>
                            <Modal.Title>Edit User</Modal.Title>
                        </Modal.Header>
                        <Modal.Body>
                            <Form>
                                <Form.Group className="mb-3">
                                    <Form.Label>Name</Form.Label>
                                    <Form.Control type="text" placeholder="Enter Name" value={editName}
                                                  onChange={(e)=> setEditName(e.target.value)}
                                    />
                                </Form.Group>

                                <Form.Group className="mb-3">
                                    <Form.Label>Age</Form.Label>
                                    <Form.Control type="text" placeholder="Enter Age" value={editAge}
                                                  onChange={(e)=> setEditAge(e.target.value)}
                                    />
                                </Form.Group>
                                <Form.Group className="mb-3">
                                    <Form.Check type="checkbox" label="IsActive" checked={editIsActive === 1 ? true : false}
                                                onChange={(e)=> setEditIsActive(e)} value={editIsActive}
                                    />
                                </Form.Group>
                            </Form>
                        </Modal.Body>
                        <Modal.Footer>
                            <Button variant="secondary" onClick={handleClose}>
                                Close
                            </Button>
                            <Button variant="success" onClick={handleUpdate}>
                                Update
                            </Button>
                        </Modal.Footer>
                    </Modal>
                </Card.Body>
            </Card>
        </Fragment>
    )
}

export default Crud;