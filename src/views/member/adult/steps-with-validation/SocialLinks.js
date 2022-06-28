// ** React Imports
// import axios from 'axios'
import { Fragment } from 'react'

// ** Third Party Components
import { ArrowLeft } from 'react-feather'
import { useForm, Controller } from 'react-hook-form'

// ** Reactstrap Imports
import { Label, Row, Col, Button, Form, Input, FormFeedback } from 'reactstrap'

const defaultValues = {
  name: '',
  contact: ''
}

const SocialLinks = ({fileRef, formData, setformData, stepper }) => {
  // ** Hooks
  const {
    control,
    setError,
    handleSubmit,
    formState: { errors }
  } = useForm({ defaultValues })

  const postData = async (fd) => {
      try {

        const request =  await fetch(`http://localhost:3004/api/v1/member`, {
          method:"post",
          body:fd,
          headers:{
            'Content-Type': 'multipart/form-data'
          }
        })
        //  const request = await axios.post(`http://localhost:3004/api/v1/member`, fd, {
        //      headers: {
        //        'Content-Type': 'multipart/form-data'
        //      }
        //  })
         console.log({request})
     } catch (error) {
         console.log({error})
     }
  }

  const onSubmit = data => {
    console.log({ data })
    if (Object.values(data).every(field => field.length > 0)) {
      setformData((pre) => ({ ...pre, ...data }))

      const fd = new FormData()
      fd.append('image', fileRef.current?.files[0])
      fd.append('firstName', formData?.firstName)
      fd.append('lastName', formData?.lastName)
      fd.append('gender', formData?.gender)
      fd.append('dob', formData?.dob)
      fd.append('homeRegion', formData.homeRegion)
      fd.append('phone', formData.phone)

      postData(fd)
      
    } else {
      for (const key in data) {
        if (data[key].length === 0) {
          setError(key, {
            type: 'manual',
            message: `Please enter a valid ${key}`
          })
        }
      }
    }
  }

  return (
    <Fragment>

      <Form onSubmit={handleSubmit(onSubmit)}>
        <Row>
          <Col md='8' className='mb-1'>
            <Label className='form-label' for='name'>
              Name
            </Label>
            <Controller
              id='name'
              name='name'
              control={control}
              render={({ field }) => (
                <Input placeholder='Name' invalid={errors.name && true} {...field} />
              )}
            />
            {errors.name && <FormFeedback>{errors.name.message}</FormFeedback>}
          </Col>
          <Col md='4' className='mb-1'>
            <Label className='form-label' for='contact'>
              Contact
            </Label>
            <Controller
              id='contact'
              name='contact'
              control={control}
              render={({ field }) => (
                <Input type='number' placeholder='Active contact' invalid={errors.contact && true} {...field} />
              )}
            />
            {errors.contact && <FormFeedback>{errors.contact.message}</FormFeedback>}
          </Col>
        </Row>

        <div className='d-flex justify-content-between'>
          <Button color='primary' className='btn-prev' onClick={() => stepper.previous()}>
            <ArrowLeft size={14} className='align-middle me-sm-25 me-0'></ArrowLeft>
            <span className='align-middle d-sm-inline-block d-none'>Previous</span>
          </Button>
          <Button type='submit' color='success' className='btn-submit'>
            Submit
          </Button>
        </div>
      </Form>
    </Fragment>
  )
}

export default SocialLinks
