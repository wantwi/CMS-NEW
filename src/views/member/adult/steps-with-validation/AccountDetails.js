// ** React Imports
import { Fragment, useState, useRef } from 'react'

// ** Utils
import { selectThemeColors } from '@utils'
import Select from 'react-select'
// ** Third Party Components
// import * as yup from 'yup'
import { useForm, Controller } from 'react-hook-form'
import { ArrowLeft, ArrowRight } from 'react-feather'
// import { yupResolver } from '@hookform/resolvers/yup'
import classnames from 'classnames'
// ** Reactstrap Imports
import { Form, Label, Input, Row, Col, Button, FormFeedback } from 'reactstrap'

const defaultValues = {
  memberType: null,
  yoj: new Date().getFullYear()
}

const AccountDetails = ({ setformData, stepper }) => {

  const [data, setData] = useState(null)
  const mClass = useRef(null)

  const organizations = useRef(null)

  const roles = useRef(null)

  // ** Hooks

  const {
    control,
    setError,
    handleSubmit,
    formState: { errors }
  } = useForm({
    defaultValues
  })

  const checkIsValid = data => {
    return Object.values(data).every(field => (typeof field === 'object' ? field !== null : field.length > 0))
  }


  const onSubmit = data => {
    setData(data)
    if (checkIsValid(data)) {

      setformData((pre) => ({
        ...pre,
        ...data,
        memberType: data?.memberType.value,
        mClass: mClass.current.getValue()[0].value,
        roles: roles.current.getValue().map(x => x.value),
        organizations: organizations.current.getValue().map(x => x.value)
      }))
      stepper.next()

    } else {
      for (const key in data) {
        if (data[key] === null) {
          setError('gender', {
            type: 'manual'
          })
        }
        if (data[key] !== null && data[key].length === 0) {
          setError(key, {
            type: 'manual'
          })
        }
      }
    }

  }


  const organisationOptions = [
    { value: 'English', label: 'English' },
    { value: 'French', label: 'French' },
    { value: 'Spanish', label: 'Spanish' },
    { value: 'Italian', label: 'Italian' },
    { value: 'Japanese', label: 'Japanese' }
  ]

  const rolesOptions = [
    { value: 'English', label: 'English' },
    { value: 'French', label: 'French' },
    { value: 'Spanish', label: 'Spanish' },
    { value: 'Italian', label: 'Italian' },
    { value: 'Japanese', label: 'Japanese' }
  ]

  return (
    <Fragment>
      {/* <div className='content-header'>
        <h5 className='mb-0'>Account Details</h5>
        <small className='text-muted'>Enter Your Account Details.</small>
      </div> */}
      <Form onSubmit={handleSubmit(onSubmit)}>
        <Row>
          <Col md='2' className='mb-1'>
            <Label className='form-label' for='yoj'>
              Year of Joining
            </Label>
            <Controller
              id='yoj'
              name='yoj'
              control={control}
              render={({ field }) => <Input type='number' placeholder='2022' invalid={errors.yoj && true} {...field} />}
            />
            {errors.yoj && <FormFeedback>{errors.yoj.message}</FormFeedback>}
          </Col>
          <Col md='4' className='mb-1'>
            <Label className='form-label' for='language'>
              Member Type
            </Label>
            <Controller
              name='memberType'
              control={control}
              render={({ field }) => (
                <Select
                  isClearable={false}
                  classNamePrefix='select'
                  options={[{ value: "Fullmember", label: "Fullmember" }, { value: "Adherent", label: "Adherent" }, { value: "Catechuemen", label: "Catechuemen" }]}
                  theme={selectThemeColors}
                  // defaultInputValue={"Fullmember"}
                  className={classnames('react-select', { 'is-invalid': data !== null && data?.memberType === null })}
                  {...field}
                />
              )}
            />

          </Col>
          <Col md='6' className='mb-1'>
            <Label className='form-label' for='language'>
              Class
            </Label>
            <Select

              isClearable={false}
              theme={selectThemeColors}
              id={`classLeader`}
              options={[{ value: "Peace", label: "Peace" }]}
              className='react-select'
              classNamePrefix='select'
              ref={mClass}
            />
          </Col>

        </Row>
        <Row>
          <Col md='6' className='mb-1'>
            <Label className='form-label' for='language'>
              Organization
            </Label>
            <Select
              isMulti
              isClearable={false}
              theme={selectThemeColors}
              id={`language`}
              options={organisationOptions}
              className='react-select'
              classNamePrefix='select'
              ref={organizations}
            />
          </Col>
          <Col md='6' className='mb-1'>
            <Label className='form-label' for='language'>
              Roles
            </Label>
            <Select
              isMulti
              isClearable={false}
              theme={selectThemeColors}
              id={`language`}
              options={rolesOptions}
              className='react-select'
              classNamePrefix='select'
              ref={roles}

            />
          </Col>
        </Row>
        <Row hidden>
          <Col md='4' className='mb-1'>
            <Label className='form-label' for='language'>
              GHAMSU Member
            </Label>
            <Select

              isClearable={false}
              theme={selectThemeColors}
              id={`classLeader`}
              options={[{ value: 'Yes', label: 'Yes' }, { value: 'No', label: 'No' }]}
              className='react-select'
              classNamePrefix='select'
            />
          </Col>
          <Col md="8">
            <Label className='form-label' for='language'>
              Institution
            </Label>
            <Input type='number' placeholder='Institution' />
          </Col>
        </Row>
        <div className='d-flex justify-content-between'>
          {/* <Button color='secondary' className='btn-prev' outline disabled>
            <ArrowLeft size={14} className='align-middle me-sm-25 me-0'></ArrowLeft>
            <span className='align-middle d-sm-inline-block d-none'>Previous</span>
          </Button> */}
          <Button type='button' color='primary' className='btn-prev' onClick={() => stepper.previous()}>
            <ArrowLeft size={14} className='align-middle me-sm-25 me-0'></ArrowLeft>
            <span className='align-middle d-sm-inline-block d-none'>Previous</span>
          </Button>
          <Button type='submit' color='primary' className='btn-next'>
            <span className='align-middle d-sm-inline-block d-none'>Next</span>
            <ArrowRight size={14} className='align-middle ms-sm-25 ms-0'></ArrowRight>
          </Button>
        </div>
      </Form>
    </Fragment>
  )
}

export default AccountDetails
