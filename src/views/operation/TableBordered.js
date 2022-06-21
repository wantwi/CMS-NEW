// ** Custom Components
import AvatarGroup from '@components/avatar-group'
import { Button } from 'bootstrap'

// ** Images

// ** Icons Imports
import { MoreVertical, Edit, Trash } from 'react-feather'

// ** Reactstrap Imports
import { Table, Badge, UncontrolledDropdown, DropdownMenu, DropdownItem, DropdownToggle, Input } from 'reactstrap'


const TableBordered = () => {
  return (
    <Table bordered responsive>
      <thead>
        <tr>
          <th colSpan={2} ></th>
          <th colSpan={5} style={{ textAlign: "center" }}>Number</th>

          <th></th>
          <th></th>
        </tr>
      </thead>
      <thead>
        <tr>
          <th colSpan={2}>Operation</th>
          <th>Week 1</th>
          <th>Week 2</th>
          <th>Week 3</th>
          <th>Week 4</th>
          <th>Week 5</th>
          <th>Total</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        <tr>

          <td colSpan={2}>Peter Charles Owusu Anjra  Yaw</td>
          <td>
            <Input size="sm" style={{ width: 70, textAlign: "right" }} name='week1' placeholder='0' type='number' />
          </td>
          <td>
            <Input size="sm" style={{ width: 70, textAlign: "right" }} name='week2' placeholder='0' type='number' />
          </td>
          <td>
            <Input size="sm" style={{ width: 70, textAlign: "right" }} name='week3' placeholder='0' type='number' />
          </td>
          <td>
            <Input size="sm" style={{ width: 70, textAlign: "right" }} name='week4' placeholder='0' type='number' />
          </td>
          <td>
            <Input size="sm" style={{ width: 70, textAlign: "right" }} name='week5' placeholder='0' type='number' />
          </td>
          <td>
            100
          </td>
          <td>
            <Edit />
            <Trash />
          </td>
        </tr>
        <tr>

          <td colSpan={2}>Peter Charles Owusu Anjra  Yaw</td>
          <td>
            <Input size="sm" style={{ width: 70, textAlign: "right" }} name='week1' placeholder='0' type='number' />
          </td>
          <td>
            <Input size="sm" style={{ width: 70, textAlign: "right" }} name='week2' placeholder='0' type='number' />
          </td>
          <td>
            <Input size="sm" style={{ width: 70, textAlign: "right" }} name='week3' placeholder='0' type='number' />
          </td>
          <td>
            <Input size="sm" style={{ width: 70, textAlign: "right" }} name='week4' placeholder='0' type='number' />
          </td>
          <td>
            <Input size="sm" style={{ width: 70, textAlign: "right" }} name='week5' placeholder='0' type='number' />
          </td>
          <td>
            100
          </td>
          <td>
            <Edit />
            <Trash />
          </td>
        </tr>


      </tbody>
    </Table>
  )
}

export default TableBordered
