// ** React Imports
import { useState } from 'react'

// ** Third Party Components
import Flatpickr from 'react-flatpickr'
import { User, Briefcase, Mail, Calendar, DollarSign, X } from 'react-feather'

// ** Reactstrap Imports
import { Modal, Input, Label, Button, ModalHeader, ModalBody, InputGroup, InputGroupText } from 'reactstrap'

import { selectThemeColors } from '@utils'
import Select from 'react-select'

// ** Styles
import '@styles/react/libs/flatpickr/flatpickr.scss'

const AddNewModal = ({ open, handleModal }) => {
  const [name, setName] = useState("")
  const [status, setStatus] = useState({ value: 'Active', label: 'Active' })
  // ** State
  // const [Picker, setPicker] = useState(new Date())

  // ** Custom close btn
  const CloseBtn = <X className='cursor-pointer' size={15} onClick={handleModal} />

  const canSave = [name, status].every(Boolean) 

  const handleSubmit = () => {
    const data = {name, status:status.value}
    console.log({data})
  }

  return (
    <Modal
      isOpen={open}
      toggle={handleModal}
      className='sidebar-sm'
      modalClassName='modal-slide-in'
      contentClassName='pt-0'
    >
      <ModalHeader className='mb-1' toggle={handleModal} close={CloseBtn} tag='div'>
        <h5 className='modal-title'>New Operation</h5>
      </ModalHeader>
      <ModalBody className='flex-grow-1'>
        <div className='mb-1'>
          <Label className='form-label' for='full-name'>
            Name
          </Label>
          <InputGroup>
            {/* <InputGroupText>
              <User size={15} />
            </InputGroupText> */}
            <Input id='full-name' value={name} onChange={(e) => setName(e.target.value)} placeholder='Operation' />
          </InputGroup>
        </div>
        <div className='mb-1'>
          <Label className='form-label' for='post'>
           Status
          </Label>
          <Select
          value={status} onChange={(e) => setStatus({ value: e.target.value, label:e.target.value })}
              theme={selectThemeColors}
              className='react-select'
              classNamePrefix='select'
               defaultValue={status}
              options={[{ value: 'Active', label: 'Active' }, { value: 'Inactive', label: 'Inactive' }]}
              isClearable={false}
            />
        </div>
        {/* <div className='mb-1'>
          <Label className='form-label' for='email'>
            Email
          </Label>
          <InputGroup>
            <InputGroupText>
              <Mail size={15} />
            </InputGroupText>
            <Input type='email' id='email' placeholder='brucewayne@email.com' />
          </InputGroup>
        </div>
        <div className='mb-1'>
          <Label className='form-label' for='joining-date'>
            Joining Date
          </Label>
          <InputGroup>
            <InputGroupText>
              <Calendar size={15} />
            </InputGroupText>
            <Flatpickr className='form-control' id='joining-date' value={Picker} onChange={date => setPicker(date)} />
          </InputGroup>
        </div>
        <div className='mb-1'>
          <Label className='form-label' for='salary'>
            Salary
          </Label>
          <InputGroup>
            <InputGroupText>
              <DollarSign size={15} />
            </InputGroupText>
            <Input type='number' id='salary' />
          </InputGroup>
        </div> */}
        <Button disabled={!canSave} className='me-1' color='primary' onClick={handleSubmit}>
          Add
        </Button>
        <Button color='secondary' onClick={handleModal} outline>
          Cancel
        </Button>
      </ModalBody>
    </Modal>
  )
}

export default AddNewModal
