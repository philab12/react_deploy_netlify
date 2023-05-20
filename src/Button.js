import React from 'react'

const Button = ({setRegType, buttonText, reqType}) => {
  return (
    <button className={buttonText === reqType ? "selected" : null} 
            type='button' 
            onClick={() => setRegType(buttonText)}
    >
        {buttonText}
    </button>
  )
}

export default Button