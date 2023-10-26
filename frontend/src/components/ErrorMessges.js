import React from 'react'
import { ErrorMessage } from 'formik'

const ErrorMessges = ({name}) => {
  return (
    <span className='text-sm text-red-600'>
        <ErrorMessage name={name}/>
    </span>
  )
}

export default ErrorMessges