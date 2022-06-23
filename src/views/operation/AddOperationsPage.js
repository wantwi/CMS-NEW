import React, { useState, useEffect, useRef } from 'react'
import { Button, Card, CardTitle, CardHeader } from 'reactstrap'
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
import { Save } from 'react-feather'
const commands = [
    { type: 'Edit', buttonOption: { iconCss: ' e-icons e-edit', cssClass: 'e-flat' } },
    { type: 'Delete', buttonOption: { iconCss: 'e-icons e-delete', cssClass: 'e-flat' } },
    { type: 'Save', buttonOption: { iconCss: 'e-icons e-update', cssClass: 'e-flat' } },
    { type: 'Cancel', buttonOption: { iconCss: 'e-icons e-cancel-icon', cssClass: 'e-flat' } }
]

const init = [
    { operation: "Wedding", week1: 0, week2: 0, week3: 0, week4: 0, week5: 0 },
    { operation: "Prayer Meetings", week1: 0, week2: 0, week3: 0, week4: 0, week5: 0 },
    { operation: "Church Attendance", week1: 0, week2: 0, week3: 0, week4: 0, week5: 0 },
    { operation: "Oganizational Meeting", week1: 0, week2: 0, week3: 0, week4: 0, week5: 0 },
    { operation: "Class Meeting", week1: 0, week2: 0, week3: 0, week4: 0, week5: 0 },
    { operation: "Class Attendance", week1: 0, week2: 0, week3: 0, week4: 0, week5: 0 },
    { operation: "Bible Studies", week1: 0, week2: 0, week3: 0, week4: 0, week5: 0 },
    { operation: "Mid-week Service", week1: 0, week2: 0, week3: 0, week4: 0, week5: 0 },
    { operation: "Death", week1: 0, week2: 0, week3: 0, week4: 0, week5: 0 }
]
// const queryCellInfoEvent = (args) => {
//     const arg = args.column.field
//     if (arg === "sum") {
//         args.rowSpan = init.length
//     }
// }
const AddOperationsPage = () => {
    const [data, setdata] = useState([])
    const grid = useRef(null)
    // const [isSave, setIsSave] = useState(false)

    useEffect(() => {

        setdata(init)
        return () => {
            setdata([])
        }
    }, [])

    const saveBtnClick = () => {
        console.log({ grid: grid.current.currentViewData })
        // setIsSave(true)


    }

    const content = <GridComponent
        ref={grid}
        editSettings={{
            allowEditing: true,
            allowAdding: true,
            allowDeleting: true,
            newRowPosition: 'Top'
        }}
        // queryCellInfo={queryCellInfoEvent}
        height={400}
        dataSource={data}
        allowPaging={true}
        pageSettings={{ pageCount: 5 }}>
        <ColumnsDirective>
            <ColumnDirective isPrimaryKey={true} field='operation' headerText='Operation' width='200'></ColumnDirective>
            <ColumnDirective field='week1' headerText='Week1' width='70' showInColumnChooser={false}></ColumnDirective>
            <ColumnDirective field='week2' headerText='Week2' width='70' />
            <ColumnDirective field='week3' headerText='Week3' width='70' />
            <ColumnDirective field='week4' headerText='Week4' width='70' />
            <ColumnDirective field='week5' headerText='Week5' width='70'></ColumnDirective>
            <ColumnDirective field='sum' headerText='sum' width='70'></ColumnDirective>

            <ColumnDirective headerText='Action' width='100' commands={commands}></ColumnDirective>
        </ColumnsDirective>
        <Inject services={[Page, CommandColumn, Toolbar, Edit, Group, ColumnChooser]} />
    </GridComponent>

    return (
        <Card className='p-2'>
            <CardHeader className='flex-md-row flex-column align-md-items-center align-items-start border-bottom'>
                <CardTitle tag='h4'>New Record</CardTitle>
                <div className='d-flex mt-md-0 mt-1'>

                    <Button className='ms-2' color='primary' onClick={saveBtnClick}>
                        <Save size={15} />
                        <span>Save</span>
                    </Button>


                </div>
            </CardHeader>
            {content}
        </Card>
    )
}

export default AddOperationsPage