import React from 'react'
import "./Header.css"
import { useState } from 'react'

const Header = ({search}) => {

  const [valueInput, setValue] = useState('')

  const handleFormSubmit = (event) => {
    event.preventDefault();
    search(valueInput)
  }

  const handleChange = (event) => {
    setValue(event.target.value) 
  }

  return (
    <div className='searchHeader'>
        <form onSubmit={handleFormSubmit}>
            <label>What are you looking for?</label>
            <input value = {valueInput} onChange = {handleChange}/>
        </form>


    </div>
  )
}

export default Header