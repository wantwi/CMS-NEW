import React from 'react'
import TableBordered from './TableBordered'
import {
    Row,
    Col,
    Card,
    Input,
    Label,
    Button,
    CardTitle,
    CardHeader,
    DropdownMenu,
    DropdownItem,
    DropdownToggle,
    UncontrolledButtonDropdown,
    Badge,
    UncontrolledDropdown
} from 'reactstrap'
import { Plus, Edit, MoreVertical, Archive, Trash } from 'react-feather'

const OperationsPage = () => {
    return (
        <Card >
            <CardHeader className='flex-md-row flex-column align-md-items-center align-items-start border-bottom'>
                <CardTitle tag='h4'>Leader</CardTitle>
                <div className='d-flex mt-md-0 mt-1'>
                    <UncontrolledButtonDropdown hidden={true}>
                        <DropdownToggle color='secondary' caret outline>

                            <span className='align-middle ms-50'>Export</span>
                        </DropdownToggle>

                    </UncontrolledButtonDropdown>

                    <Button className='ms-2' color='primary' onClick={() => setModal(true)}>
                        <Plus size={15} />
                        <span>Add Leader</span>
                    </Button>


                </div>
            </CardHeader><TableBordered /></Card>
    )
}

export default OperationsPage