import { Modal, Button } from "react-bootstrap"
const DeleteConfirmation = ({showModal, hideModal, confirmModal, id, type, message}) => {


    return (
        <Modal>
            <Modal.Header closeButton>
                <Modal.Title>Delete</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <div className="alert alert-danger">{message}</div>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="default" onClick={hideModal}>
                    Cancel
                </Button>
                <Button variant="default" onClick={confirmModal(type,id)}>
                    Delete
                </Button>
            </Modal.Footer>
        </Modal>
    )

}
export default DeleteConfirmation;