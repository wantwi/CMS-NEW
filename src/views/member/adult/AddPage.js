// ** React Imports
import { useRef, useState } from 'react'

// ** Custom Components
import Wizard from '@components/wizard'

// ** Steps
import Address from './steps-with-validation/Address'
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
      content: <PersonalInfo formData={formData} setformData={setformData}  stepper={stepper} />
    },
    {
      id: 'account-details',
      title: 'Account Details',
      subtitle: 'Enter Your Account Details.',
      content: <AccountDetails formData={formData} setformData={setformData}  stepper={stepper} />
    },
   
    {
      id: 'step-address',
      title: 'Address',
      subtitle: 'Add Address',
      content: <Address formData={formData} setformData={setformData}  stepper={stepper} />
    },
    {
      id: 'social-links',
      title: 'Social Links',
      subtitle: 'Add Social Links',
      content: <SocialLinks formData={formData} setformData={setformData}  stepper={stepper} />
    }
  ]

  console.log({formData})

  return (
    <div className='horizontal-wizard'>
      <Wizard instance={el => setStepper(el)} ref={ref} steps={steps} />
    </div>
  )
}

export default AddNewModal