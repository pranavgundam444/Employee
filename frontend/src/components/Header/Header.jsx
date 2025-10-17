import React, { useState } from 'react'

const Header = (props) => {



  const handleLogout = () => {
    localStorage.removeItem("loggedInUser")
    props.changeUser('')
  }

  return (
    <div className='flex items-end justify-between'>
        <h1 className='text-xl font-medium'>Hello, <br/> <span className='text-3xl font-semibold'>{props.data.name}</span>👋</h1>
        <button onClick={handleLogout} className='bg-red-600 px-5 py-2 rounded-md'>Logout</button>
    </div>
  )
}

export default Header
