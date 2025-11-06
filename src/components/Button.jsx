import React from 'react'

const Button = ({className, style, title}) => {
  return (
    <button className={`btn ${className}`} style={style}>
        {title}
    </button>
  )
}

export default Button