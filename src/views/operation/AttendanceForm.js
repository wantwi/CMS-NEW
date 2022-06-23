import React from 'react'
import {
    ColumnDirective,
    ColumnsDirective,
    GridComponent,
    Page,
    Inject,
    Toolbar,
    Group,
    Edit,
    CommandColumn
} from '@syncfusion/ej2-react-grids'
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap'

const AttendanceForm = (props) => {
    const { modal, setModal } = props


    const toggleModal = () => {
        setModal(!Modal)
    }
    return (
        <Modal
            isOpen={modal}
            toggle={() => toggleModal(false)}
            className={`modal-dialog-centered`}
            size="lg"
        >
            <ModalHeader toggle={() => toggleModal(!modal)}>
                Modal
            </ModalHeader>
            <ModalBody>

                <>
                    <h1>Table</h1>

                </>

            </ModalBody>
            <ModalFooter>
                <Button color='primary' onClick={() => toggleModal(false)} outline>
                    Accept
                </Button>
            </ModalFooter>
        </Modal>
    )
}

export default AttendanceForm