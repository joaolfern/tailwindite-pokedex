import React from 'react'
import { Field } from 'formik'

function InputText({ ...rest }) {
  return (
    <div className='relative'>
      <Field
        className='rounded p-1 text-lg'
        type='text'
        {...rest}
      />
    </div>
  )
}

export default InputText
