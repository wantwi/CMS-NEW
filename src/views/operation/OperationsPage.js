import React, { useRef, useState } from 'react'
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
import { Plus } from 'react-feather'
import {
    ColumnDirective,
    ColumnsDirective,
    GridComponent,
    Page,
    Inject,
    Toolbar,
    Group,
    Edit,
    CommandColumn,
    ColumnChooser
} from '@syncfusion/ej2-react-grids'
import AttendanceForm from "./AttendanceForm"

const commands = [
    { type: 'Edit', buttonOption: { iconCss: ' e-icons e-edit', cssClass: 'e-flat' } },
    { type: 'Delete', buttonOption: { iconCss: 'e-icons e-delete', cssClass: 'e-flat' } },
    { type: 'Save', buttonOption: { iconCss: 'e-icons e-update', cssClass: 'e-flat' } },
    { type: 'Cancel', buttonOption: { iconCss: 'e-icons e-cancel-icon', cssClass: 'e-flat' } }
]


const OperationsPage = () => {
    const [modal, setModal] = useState(false)
    const grid = useRef(null)
    const toolbarClick = (args) => {

        if (grid && args.item.id.includes('excelexport')) {
            grid.current.excelExport()
        }
        if (grid && args.item.id.includes('pdfexport')) {
            grid.current.pdfExport()
        }
    }
    return (
        <Card className='p-2' >
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
            </CardHeader>

            <GridComponent
                editSettings={{
                    allowEditing: true,
                    allowAdding: true,
                    allowDeleting: true,
                    newRowPosition: 'Top'
                }}
                height={365}
                toolbar={['ExcelExport', 'PdfExport', 'ColumnChooser']}
                toolbarClick={toolbarClick}
                dataSource={[]}
                allowExcelExport={true}
                allowPdfExport={true}
                allowPaging={true} pageSettings={{ pageCount: 5 }}
                ref={grid}
            >
                <ColumnsDirective>
                    <ColumnDirective
                        headerText="Operations"
                        field="name"
                        width="150"
                        isPrimaryKey={true}
                    />
                    <ColumnDirective
                        columns={[
                            {
                                field: 'week1',
                                headerText: 'Week 1',

                                width: 100
                            },
                            {
                                field: 'week2',
                                headerText: 'Week 2',
                                width: 100
                            },
                            {
                                field: 'week3',
                                headerText: 'Week 3',
                                width: 100
                            },
                            {
                                field: 'week4',
                                headerText: 'Week 4',
                                width: 100
                            },
                            {
                                field: 'week5',
                                headerText: 'Week 5',
                                width: 100
                            }
                        ]}
                        headerText="Numbers"
                        textAlign="Center"
                    ></ColumnDirective>
                    <ColumnDirective
                        headerText="Total"
                        field="total"
                        width="100"
                        isPrimaryKey={true}

                    />
                    <ColumnDirective headerText='Action' width='100' commands={commands}></ColumnDirective>
                </ColumnsDirective>
                <Inject services={[Page, CommandColumn, Toolbar, Edit, Group, ColumnChooser]} />
            </GridComponent>
            <AttendanceForm setModal={setModal} modal={modal} />
        </Card>
    )
}

export default OperationsPage