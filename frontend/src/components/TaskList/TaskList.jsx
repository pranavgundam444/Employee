    import React from 'react'

    const TaskList = ({data}) => {

            return (

                <div className='flex gap-5 mt-10'>
                    <div className='w-[45%] bg-red-500 px-9 py-6 rounded-sm'>
                        <h2 className='text-3xl font-medium'>{data.taskCounts.active}</h2>
                        <h3 className='text-2xl font-large'>Active</h3>
                    </div>
                    <div className='w-[45%] bg-blue-500 px-9 py-6 rounded-sm'>
                        <h2 className='text-3xl font-medium'>{data.taskCounts.newTask}</h2>
                        <h3 className='text-2xl font-large'>New task</h3>
                    </div>
                    <div className='w-[45%] bg-green-500 px-9 py-6 rounded-sm'>
                        <h2 className='text-3xl font-medium'>{data.taskCounts.completed}</h2>
                        <h3 className='text-2xl font-large'>Completed</h3>
                    </div>
                    <div className='w-[45%] bg-yellow-500 px-9 py-6 rounded-sm'>
                        <h2 className='text-3xl font-medium'>{data.taskCounts.failed}</h2>
                        <h3 className='text-2xl font-large'>Failed</h3>
                    </div>
                </div>
            )

    
    }

    export default TaskList