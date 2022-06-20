// ** React Imports
import { useRef, useState } from 'react'
import ImageUploader from 'react-image-upload'
import 'react-image-upload/dist/index.css'

// ** Custom Components
import Wizard from '@components/wizard'
import { Row, Col, Card } from 'reactstrap'

// ** Steps
import SocialLinks from './steps-with-validation/SocialLinks'
import PersonalInfo from './steps-with-validation/PersonalInfo'
import AccountDetails from './steps-with-validation/AccountDetails'

const AddNewModal = () => {
  // ** Ref
  const ref = useRef(null)

  // ** State
  const [stepper, setStepper] = useState(null)
  const [formData, setformData] = useState({})

  const steps = [
    {
      id: 'personal-info',
      title: 'Personal Info',
      subtitle: 'Add Personal Info',
      content: <PersonalInfo formData={formData} setformData={setformData} stepper={stepper} />
    },
    {
      id: 'account-details',
      title: 'Membership Info',
      subtitle: 'Enter Your Members Infomation.',
      content: <AccountDetails formData={formData} setformData={setformData} stepper={stepper} />
    },
    {
      id: 'emergency-contact',
      title: 'Emergency Contact',
      subtitle: 'Add Emergency Contact',
      content: <SocialLinks formData={formData} setformData={setformData} stepper={stepper} />
    }
  ]

  const getImageFileObject = (imageFile) => {
    console.log({ imageFile })
    setformData((pre) => ({ ...pre, image: imageFile }))
  }
  const runAfterImageDelete = (file) => {

    console.log({ file })
    delete formData?.image
  }

  console.log({ formData })

  return (
    <Row>
      <Col md="9">
        <div className='horizontal-wizard'>
          <Wizard instance={el => setStepper(el)} ref={ref} steps={steps} />
        </div>
      </Col>
      <Col md="3">
        <Card className='p-2'>
          <div style={{ margin: "5px auto" }}>
            <div className='content-header'>
              <h5 className='mb-0'>Profile Picture</h5>
              <small>Add Profile Picture</small>
            </div>

            <ImageUploader
              onFileAdded={(img) => getImageFileObject(img)}
              onFileRemoved={(img) => runAfterImageDelete(img)}
              style={{ height: 220, width: 220, marginTop: 10 }}

            />

          </div>

        </Card>
      </Col>
    </Row>

  )
}

export default AddNewModal