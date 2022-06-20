// ** React Import
import { useState } from 'react'
import AutoComplete from '@components/autocomplete'
import img1 from '@src/assets/images/portrait/small/avatar-s-1.jpg'
import img2 from '@src/assets/images/portrait/small/avatar-s-2.jpg'
import img3 from '@src/assets/images/portrait/small/avatar-s-3.jpg'
import img4 from '@src/assets/images/portrait/small/avatar-s-4.jpg'
import img5 from '@src/assets/images/portrait/small/avatar-s-5.jpg'
import img6 from '@src/assets/images/portrait/small/avatar-s-6.jpg'


// ** Custom Components
import Sidebar from '@components/sidebar'

// ** Utils
import { selectThemeColors } from '@utils'

// ** Third Party Components
import Select from 'react-select'
import classnames from 'classnames'
import { useForm, Controller } from 'react-hook-form'

// ** Reactstrap Imports
import { Button, Label, FormText, Form, Input } from 'reactstrap'

// ** Store & Actions
// import { addUser } from '../store'
// import { useDispatch } from 'react-redux'

const defaultValues = {
  email: '',
  contact: '',
  company: '',
  fullName: '',
  username: '',
  country: null
}


const checkIsValid = data => {
  return Object.values(data).every(field => (typeof field === 'object' ? field !== null : field.length > 0))
}

const SidebarNewUsers = ({ open, toggleSidebar }) => {
  // ** States
  const [data, setData] = useState(null)
  const [plan, setPlan] = useState('basic')
  // const [role, setRole] = useState('subscriber')
  const [selectOption, setSelectOption] = useState([])
  const [text, setText] = useState("Select Option")
  const [suggestions] = useState([
    {
      name: 'Jake Shelton',
      img: img1
    },
    {
      name: 'Edith Baldwin',
      img: img2
    },
    {
      name: 'Jennifer Wolfe',
      img: img3
    },
    {
      name: 'Emily Washington',
      img: img4
    },
    {
      name: 'Heather Green',
      img: img6
    },
    {
      name: 'Brian Moore',
      img: img5
    }
  ])

  const AutoCompleteRender = () => {
    return (<AutoComplete
      suggestions={suggestions}
      className='form-control'
      filterKey='name'
      placeholder="Enter name"
      customRender={(
        suggestion,
        i,
        filteredData,
        activeSuggestion,
        onSuggestionItemClick,
        onSuggestionItemHover
      ) => (
        <li
          className={classnames('suggestion-item', {
            active: filteredData.indexOf(suggestion) === activeSuggestion
          })}
          key={i}
          onMouseEnter={() => onSuggestionItemHover(filteredData.indexOf(suggestion))}
          onClick={e => {
            onSuggestionItemClick(null, e)
          }}
        >
          <img
            src={suggestion.img}
            alt={suggestion.name}
            height='32'
            width='32'
            className='me-1'
          />
          <span>{suggestion.name}</span>
        </li>
      )}
    />)
  }
  // ** Store Vars
  // const dispatch = useDispatch()

  // ** Vars
  const {
    control,
    setValue,
    setError,
    handleSubmit,
    formState: { errors }
  } = useForm({ defaultValues })

  // ** Function to handle form submit
  const onSubmit = data => {
    setData(data)
    if (checkIsValid(data)) {
      toggleSidebar()
      // dispatch(
      //   // addUser({
      //   //   role,
      //   //   avatar: '',
      //   //   status: 'active',
      //   //   email: data.email,
      //   //   currentPlan: plan,
      //   //   billing: 'auto debit',
      //   //   company: data.company,
      //   //   contact: data.contact,
      //   //   fullName: data.fullName,
      //   //   username: data.username,
      //   //   country: data.country.value
      //   // })
      // )
    } else {
      for (const key in data) {
        if (data[key] === null) {
          setError('country', {
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

  const handleSidebarClosed = () => {
    for (const key in defaultValues) {
      setValue(key, '')
    }
    // setRole('subscriber')
    // setPlan('basic')
  }

  const handleRoleSection = (e) => {

    switch (e.target.value) {
      case 'Leader':
        setSelectOption([])
        setText("Select Option")
        break
      case 'Class Leader':
        setText('Select Class')
        setSelectOption([
          { value: "Peace", label: "Peace" },
          { value: "Love", label: "Love" },
          { value: "Grace", label: "Grace" }
        ])
        break
      case 'Organization Head':
        setSelectOption([
          { value: "Brigade", label: "Brigade" },
          { value: "Men fellowship", label: "Men fellowship" },
          { value: "Guild", label: "Guild" }
        ])
        setText('Select Organization')
        break
      case 'Committee Head':
        setSelectOption([
          { value: "Welfare", label: "Welfare" },
          { value: "Education", label: "Education" },
          { value: "Evangelism", label: "Evangelism" }
        ])
        setText('Select Committee')
        break
      default:
        setSelectOption([])
    }
  }

  return (
    <Sidebar
      size='lg'
      open={open}
      title='New Leader'
      headerClassName='mb-1'
      contentClassName='pt-0'
      toggleSidebar={toggleSidebar}
      onClosed={handleSidebarClosed}
    >
      <Form onSubmit={handleSubmit(onSubmit)}>
        <div className='mb-1' hidden>
          <Label className='form-label' for='fullName'>
            Full Name <span className='text-danger'>*</span>
          </Label>
          <Controller
            name='fullName'
            control={control}
            render={({ field }) => (
              <Input id='fullName' placeholder='John Doe' invalid={errors.fullName && true} {...field} />
            )}
          />
        </div>
        <div div className='mb-1'>
          <AutoCompleteRender />
        </div>
        <div className='mb-1' value={plan} onChange={e => setPlan(e.target.value)}>
          <Label className='form-label' for='select-plan'>
            Select Role
          </Label>
          <Input type='select' id='select-plan' name='select-plan' onChange={handleRoleSection}>
            <option value='Leader'>Leader</option>
            <option value='Class Leader'>Class Leader</option>
            <option value='Organization Head'>Organization Head</option>
            <option value='Committee Head'>Committee Head</option>
            <option value='Others'>Others</option>
          </Input>
        </div>
        {
          text !== "Select Option" ? <div className='sli mb-1'>
            <Label className='form-label' for='country'>
              {text} <span className='text-danger'>*</span>
            </Label>
            <Controller

              name='country'
              control={control}
              render={({ field }) => (
                // <Input id='country' placeholder='Australia' invalid={errors.country && true} {...field} />
                <Select

                  isClearable={false}
                  classNamePrefix='select'
                  options={selectOption}
                  theme={selectThemeColors}
                  className={classnames('react-select', { 'is-invalid': data !== null && data.country === null })}
                  {...field}
                />
              )}
            /></div> : null
        }

        <Button type='submit' className='me-1' color='primary'>
          Submit
        </Button>
        <Button type='reset' color='secondary' outline onClick={toggleSidebar}>
          Cancel
        </Button>
      </Form>
    </Sidebar>
  )
}
export default SidebarNewUsers