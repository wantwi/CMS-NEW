// ** Custom Components
import AvatarGroup from '@components/avatar-group'
import { Button } from 'bootstrap'
import { useState } from 'react'
// ** Images

// ** Icons Imports
import { MoreVertical, Edit, Trash } from 'react-feather'

// ** Reactstrap Imports
import { Table, Badge, UncontrolledDropdown, DropdownMenu, DropdownItem, DropdownToggle, Input } from 'reactstrap'


const opt = [
  {
    name: "Wedding",
    week1: 20,
    week2: 40,
    week3: 89,
    week4: 120,
    week5: 474
  },
  {
    name: "Prayer Meeting",
    week1: 20,
    week2: 40,
    week3: 89,
    week4: 120,
    week5: 474
  },
  {
    name: "Church Attendance",
    week1: 0,
    week2: 0,
    week3: 0,
    week4: 0,
    week5: 0
  }
]

const TableBordered = () => {
  const [data, setData] = useState({})

  const handleChange = (event) => {
    console.log(event.target.value)
    setData((pre) => ({
      ...pre, [event.target.name]: event.target.value
    }))

  }
  console.log({ data })
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
        {
          opt.map((x, i) => <tr key={i}><td colSpan={2}>{x.name}</td><td><Input onChange={handleChange} name={`week_${i}`} bsSize="sm" value={x.week1} style={{ width: 70, textAlign: "right" }} placeholder='0' type='number' /></td><td><Input onChange={handleChange} name={`week_${i}`} bsSize="sm" value={x.week2} style={{ width: 70, textAlign: "right" }} placeholder='0' type='number' /></td><td><Input bsSize="sm" value={x.week3} style={{ width: 70, textAlign: "right" }} onChange={handleChange} name={`week_${i}`} placeholder='0' type='number' /></td><td><Input bsSize="sm" value={x.week4} style={{ width: 70, textAlign: "right" }} onChange={handleChange} name={`week_${i}`} placeholder='0' type='number' /></td><td><Input bsSize="sm" value={x.week5} style={{ width: 70, textAlign: "right" }} onChange={handleChange} name={`week_${i}`} placeholder='0' type='number' /></td><td>100</td><td><Edit /><Trash /></td></tr>)
        }

      </tbody>
    </Table>
  )
}

export default TableBordered
