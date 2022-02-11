import React from 'react'
import { Modal, Button } from "react-bootstrap";

function ModalComp({ children, ...props }) {

    return (
        <>
            <Modal
                show={props.show}
                onHide={() => props.handleShow({ open: false })}
                backdrop="static"
                keyboard={false}
            >
                <Modal.Header closeButton>
                    <Modal.Title>Delete</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    Are you sure you want to delete this user?
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={() => props.handleShow(false)} >
                        Cancel
                    </Button>
                    <Button variant="danger">Delete</Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}

export default ModalComp;