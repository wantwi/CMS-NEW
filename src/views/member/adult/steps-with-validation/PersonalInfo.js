// ** React Imports
import { Fragment, useState } from 'react'

// ** Third Party Components
import Select from 'react-select'
import { useForm, Controller } from 'react-hook-form'
import { ArrowLeft, ArrowRight } from 'react-feather'

// ** Utils
import { selectThemeColors } from '@utils'

import classnames from 'classnames'

// ** Reactstrap Imports
import { Label, Row, Col, Button, Form, Input, FormFeedback } from 'reactstrap'

// ** Styles
import '@styles/react/libs/react-select/_react-select.scss'
// import { yupResolver } from '@hookform/resolvers/yup'

// const defaultValues = {
//   lastName: '',
//   firstName: ''
// }

const defaultValues = {
  lastName: '',
  firstName: '',
  gender: null,
  dob: '',
  maritalStatus: null,
  address: '',
  phone: '',
  employmentType: null,
  profession: '',
  homeTown: '',
  homeRegion: null
}
//formData={formData} setformData={setformData}  formData,
const PersonalInfo = ({ setformData, stepper }) => {

  const [data, setData] = useState(null)
  const [optional, setOptional] = useState(null)
  // ** Hooks
  const {
    control,
    setError,
    handleSubmit,
    formState: { errors }
  } = useForm({
    defaultValues
    // resolver: yupResolver(SignupSchema)
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
        gender: data.gender.value,
        maritalStatus: data?.maritalStatus.value,
        employmentType: data?.employmentType.value,
        homeRegion: data?.homeRegion.value,
        ...optional
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

  const handleOptionalChange = (e) => {

    setOptional((pre) => ({ ...pre, [e.target.name]: e.target.value }))
  }

  const genderOptions = [
    { value: 'Male', label: 'Male' },
    { value: 'Female', label: 'Female' }
  ]

  const maritalStatus = [
    { value: 'Single', label: 'Single' },
    { value: 'Married', label: 'Married' },
    { value: 'Blessing', label: 'Blessing' },
    { value: 'Widow', label: 'Widow' },
    { value: 'Widower', label: 'Widower' },
    { value: 'Divorce', label: 'Divorce' }
  ]

  return (
    <Fragment>

      <Form onSubmit={handleSubmit(onSubmit)}>
        <Row>
          <Col md='4' className='mb-1'>
            <Label className='form-label' for='firstName'>
              First Name
            </Label>
            <Controller
              id='firstName'
              name='firstName'
              control={control}
              render={({ field }) => <Input placeholder='John' invalid={errors.firstName && true}  {...field} />}
            />
            {errors.firstName && <FormFeedback>{errors.firstName.message}</FormFeedback>}
          </Col>
          <Col md='4' className='mb-1'>
            <Label className='form-label' for='lastName'>
              Last Name
            </Label>
            <Controller
              id='lastName'
              name='lastName'
              control={control}
              render={({ field }) => <Input placeholder='Doe' invalid={errors.lastName && true}  {...field} />}
            />
            {errors.lastName && <FormFeedback>{errors.lastName.message}</FormFeedback>}
          </Col>
          <Col md='4' className='mb-1'>
            <Label className='form-label' for='other'>
              Other
            </Label>
            <Input placeholder='Other' name='other'
              value={optional?.other}
              onChange={handleOptionalChange} />

          </Col>
        </Row>
        <Row>
          <Col md='4' className='mb-1'>
            <Label className='form-label' for='country'>
              Gender
            </Label>
            <Controller
              name='gender'
              control={control}
              render={({ field }) => (
                <Select
                  isClearable={false}
                  classNamePrefix='select'
                  options={genderOptions}
                  theme={selectThemeColors}
                  className={classnames('react-select', { 'is-invalid': data !== null && data?.gender === null })}
                  {...field}
                />
              )}
            />

          </Col>
          <Col md='4' className='mb-1'>
            <Label className='form-label' for='dob'>
              Date of Birth
            </Label>
            <Controller
              id='dob'
              name='dob'
              control={control}
              render={({ field }) => <Input type='date' placeholder='' invalid={errors.dob && true}  {...field} />}
            />
            {errors.dob && <FormFeedback>{errors.dob.message}</FormFeedback>}
          </Col>
          <Col md='4' className='mb-1'>
            <Label className='form-label' for={`email`}>
              Email
            </Label>
            <Input type='email' placeholder='john.doe@email.com' name='email' value={optional?.email} onChange={handleOptionalChange} />
          </Col>
        </Row>
        <Row>
          <Col md='4' className='mb-1'>
            <Label className='form-label' for={`email`}>
              Active Phone Number
            </Label>
            <Controller
              control={control}
              id='phone'
              name='phone'
              render={({ field }) => (
                <Input placeholder='Active phone number' invalid={errors.phone && true} {...field} />
              )}
            />
            {errors.phone && <FormFeedback>{errors.phone.message}</FormFeedback>}
          </Col>
          <Col md='8' className='mb-1'>
            <Label className='form-label' for={`address`}>
              Residential/ Digital Address
            </Label>
            <Controller
              control={control}
              id='address'
              name='address'
              render={({ field }) => (
                <Input placeholder='Address' invalid={errors.address && true} {...field} />
              )}
            />
            {errors.address && <FormFeedback>{errors.address.message}</FormFeedback>}
          </Col>

        </Row>
        <Row>
          <Col md='4' className='mb-1'>
            <Label className='form-label' for={`email`}>
              Home Town
            </Label>
            <Controller
              control={control}
              id='homeTown'
              name='homeTown'
              render={({ field }) => (
                <Input placeholder='Home town' invalid={errors.homeTown && true} {...field} />
              )}
            />
            {errors.homeTown && <FormFeedback>{errors.homeTown.message}</FormFeedback>}
          </Col>
          <Col md='4' className='mb-1'>
            <Label className='form-label' for='language'>
              Region
            </Label>
            <Controller
              name='homeRegion'
              control={control}
              render={({ field }) => (
                <Select
                  isClearable={false}
                  classNamePrefix='select'
                  options={[{ value: 'Accra', label: 'Accra' }]}
                  theme={selectThemeColors}
                  className={classnames('react-select', { 'is-invalid': data !== null && data.homeRegion === null })}
                  {...field}
                />
              )}
            />

          </Col>

          <Col md='4' className='mb-1'>
            <Label className='form-label' for='dob'>
              Marital Status
            </Label>
            <Controller
              name='maritalStatus'
              control={control}
              render={({ field }) => (
                <Select
                  isClearable={false}
                  classNamePrefix='select'
                  options={maritalStatus}
                  theme={selectThemeColors}
                  className={classnames('react-select', { 'is-invalid': data !== null && data.maritalStatus === null })}
                  {...field}
                />
              )}
            />

          </Col>

        </Row>
        <Row>
          <Col md='4' className='mb-1'>
            <Label className='form-label' for='language'>
              Employment Status
            </Label>
            <Controller
              name='employmentType'
              control={control}
              render={({ field }) => (
                <Select
                  isClearable={false}
                  classNamePrefix='select'
                  options={[{ value: 'Unemployed', label: 'Unemployed' }]}
                  theme={selectThemeColors}
                  className={classnames('react-select', { 'is-invalid': data !== null && data.employmentType === null })}
                  {...field}
                />
              )}
            />

          </Col>
          <Col md='6' className='mb-1'>
            <Label className='form-label' for={`professsion`}>
              Profession / Vocation
            </Label>
            <Controller
              control={control}
              id='profession'
              name='profession'
              render={({ field }) => (
                <Input placeholder='Home town' invalid={errors.profession && true} {...field} />
              )}
            />
            {errors.profession && <FormFeedback>{errors.profession.message}</FormFeedback>}
          </Col>

        </Row>
        <div className='d-flex justify-content-between'>
          <Button color='secondary' className='btn-prev' outline disabled>
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

export default PersonalInfo
