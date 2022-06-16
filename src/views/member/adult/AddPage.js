import React, {useEffect} from 'react'

const AddNewModal = (props) => {
  console.log({props})

  useEffect(() => {
    if (props.location.state === undefined) {
      props.history.push("/404")
    }

   
  }, [props])


  return (
    <div>Add new mwmbwe</div>
  )
}

export default AddNewModal