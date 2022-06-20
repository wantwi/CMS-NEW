import { Fragment } from 'react'

// ** Reactstrap Imports
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap'

const SectionModal = (props) => {
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

                <Fragment>
                    {
                        props.children
                    }

                </Fragment>

            </ModalBody>
            <ModalFooter>
                <Button color='primary' onClick={() => toggleModal(false)} outline>
                    Accept
                </Button>
            </ModalFooter>
        </Modal>
    )
}

export default SectionModal