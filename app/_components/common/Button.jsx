import React from 'react'

const Button = ({className,btntext}) => {
  return (
    <div className={`py-5 px-7.5 rounded-xl ${className}`}>{btntext}</div>
  )
}

export default Button