import React, { useContext, useState } from 'react'
import { AuthContext } from '../../context/AuthProvider'

const CreateTask = () => {
    const [userData, setUserData] = useContext(AuthContext)
    const [title, setTitle] = useState('')
    const [date, setDate] = useState('')
    const [assignTo, setAssignTo] = useState('')
    const [category, setCategory] = useState('')
    const [description, setDescription] = useState('')

    const handleCreateTasks = () => {

        const task = {
            title, date, category, description, active:false, newTask: true, completed: false, failed: false
        }

        const result = userData.employees
        console.log(result)
        result.forEach(element => {
            if (assignTo == element.name) {
                element.tasks.push(task)
                element.taskCounts.newTask = element.taskCounts.newTask + 1
                console.log(element)
            }
        });

        localStorage.setItem("employees", JSON.stringify(result))

        setTitle('')
        setDate('')
        setAssignTo("")
        setCategory('')
        setDescription('')
    }

  return (
    <div>
        <div className='mt-10 overflow-y-scroll bg-[#1c1c1c] p-5 flex items-start justify-between h-70 gap-30'>
            <div className='w-1/2'>
                <h2 className='mb-2'>Task Title</h2>
                <input type="text" className='mb-5 w-full border-1 p-1' placeholder='Make a UI Design' value={title} onChange={(e) => setTitle(e.target.value)}/>
                <h2 className='mb-2'>Date</h2>
                <input type="date" className='mb-5 w-full border-1 p-1' value={date} onChange={(e) => setDate(e.target.value)}/>
                <h2 className='mb-2'>Assign to</h2>
                <input type="text" className='mb-5 w-full border-1 p-1' placeholder='employee name' value={assignTo} onChange={(e) => setAssignTo(e.target.value)}/>
                <h2 className='mb-2'>Category</h2>
                <input type="text" className='mb-5 w-full border-1 p-1' placeholder='design, dev, etc' value={category} onChange={(e) => setCategory(e.target.value)}/>
            </div>
            <div className='w-1/2 flex flex-col'>
                <h2>Description</h2>
                <textarea type="text" id="" cols={25} rows={7} className='border-1' value={description} onChange={(e) => setDescription(e.target.value)}></textarea>
                <button onClick={handleCreateTasks} className='bg-green-300 mt-5 rounded p-2'>Create Task</button>
            </div>
        </div>
        <div className='bg-[#1c1c1c] mt-7 px-10 py-5 h-70'>
            <div className='flex justify-between bg-red-400 py-3 px-4 mb-3 rounded'>
                        <h2  className='w-1/5'>Employee Name</h2>
                        <h3  className='w-1/5'>New Task</h3>
                        <h5  className='w-1/5'>Active task</h5>
                        <h5  className='w-1/5'>Completed</h5>
                        <h5  className='w-1/5'>Failed</h5>
            </div>
            <div className='overflow-auto h-[80%]'>
                {userData.employees.map(function(elem, idx) {
                    return (
                        <div className='flex justify-between bg-black-400 py-3 px-4 mb-3 rounded' key={idx}>
                            <h2 className='text-lg font-medium w-1/5 text-white-400'>{elem.name}</h2>
                            <h3 className='text-lg font-medium w-1/5 text-blue-400'>{elem.taskCounts.newTask}</h3>
                            <h5 className='text-lg font-medium w-1/5 text-green-400'>{elem.taskCounts.active}</h5>
                            <h5 className='text-lg font-medium w-1/5 text-yellow-400'>{elem.taskCounts.completed}</h5>
                            <h5 className='text-lg font-medium w-1/5 text-red-600'>{elem.taskCounts.failed}</h5>
                        </div>
                    )
                })}
            </div>
            
            
        </div>
    </div>
  )
}

export default CreateTask