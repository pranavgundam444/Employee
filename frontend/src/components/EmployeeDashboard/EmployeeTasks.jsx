import React, { useEffect } from 'react'
import Header from '../Header/Header'
import TaskList from '../TaskList/TaskList'
import Tasks from '../Tasks/Tasks'

const EmployeeTasks = (props) => {
  return (
    <div className='p-10 bg-[#1c1c1c] h-screen'>
        <Header changeUser={props.changeUser} data={props.data}/>
        <TaskList data={props.data}/>
        <Tasks data={props.data}/>
    </div>
  )
}

export default EmployeeTasks