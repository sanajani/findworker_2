import React from 'react'

const Button = ({text, handler, style}) => {
  return (
    <button onClick={handler} className={style}>
    {text}
    </button>
  )
}

export default Button