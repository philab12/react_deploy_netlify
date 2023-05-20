import React from 'react'
import Button from './Button'

const Form = ({reqType, setRegType}) => {
  return (
    <form onSubmit={(e) => e.preventDefault()}>

   <Button 
      setRegType={setRegType} 
      buttonText='users' 
      reqType={reqType}
  />

   <Button 
      setRegType={setRegType} 
      buttonText='posts' 
      reqType={reqType}
  />

   <Button 
      setRegType={setRegType} 
      buttonText='comments' 
      reqType={reqType}
  />
  

       
    </form>
  )
}

export default Form