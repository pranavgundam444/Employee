import React from 'react'
import Header from '../Header/Header'
import CreateTask from '../CreateTask/CreateTask'

const AdminPanel = (props) => {
  return (
    <div className='p-10 h-screen'>
        <Header changeUser={props.changeUser} data={props.data}/>
        <CreateTask />
    </div>
  )
}

export default AdminPanel