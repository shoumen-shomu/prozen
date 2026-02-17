import React from 'react'

const Button = ({className,btntext}) => {
  return (
    <div className={`py-[20px] px-[30px] rounded-[12px] bg-[#C3DF94] ${className}`}>{btntext}</div>
  )
}

export default Button