    import React from 'react'

    const Tasks = ({data}) => {
    return (
        <div id="tasks" className='h-[43%] flex gap-5 mt-10 py-5 overflow-x-auto'>
            
            {data.tasks.map((elem,idx) => {
                if(elem.active) {
                    return (<div className='flex-shrink-0 bg-red-400 h-full w-[300px] justify-between rounded-md p-5' key={idx}>
                                <div className='flex justify-between items-end mb-5'>
                                    <h3 className='bg-red-600 h-8 w-15 text-center rounded px-3 py-1'>High</h3>
                                    <p className='font-bold'>20 feb 2024</p>
                                </div>
                                <h2 className='font-semibold text-xl'>{elem.title} </h2>
                                <p className='mt-2'>{elem.description}</p>
                                
                            </div>)
                }

                if(elem.newTask) {
                    return ( <div className='flex-shrink-0 bg-yellow-400 h-full w-[300px] justify-between rounded-md p-5' key={idx}>
                                <div className='flex justify-between items-end mb-5'>
                                    <h3 className='bg-red-600 h-8 w-15 text-center rounded px-3 py-1'>High</h3>
                                    <p className='font-bold'>20 feb 2024</p>
                                </div>
                                <h2 className='font-semibold text-xl'>{elem.title} </h2>
                                <p className='mt-2'>{elem.description}</p>
                                
                             </div>
                            )
                }

                if(elem.completed) {
                    return (
                        <div className='flex-shrink-0 bg-green-400 h-full w-[300px] justify-between rounded-md p-5' key={idx}>
                            <div className='flex justify-between items-end mb-5'>
                                <h3 className='bg-red-600 h-8 w-15 text-center rounded px-3 py-1'>High</h3>
                                <p className='font-bold'>20 feb 2024</p>
                            </div>
                            <h2 className='font-semibold text-xl'>{elem.title} </h2>
                            <p className='mt-2'>{elem.description}</p>
                            
                        </div>
                    )
                }

                if(elem.failed) {
                    return (
                        <div className='flex-shrink-0 bg-blue-400 h-full w-[300px] justify-between rounded-md p-5' key={idx}>
                            <div className='flex justify-between items-end mb-5'>
                                <h3 className='bg-red-600 h-8 w-15 text-center rounded px-3 py-1'>High</h3>
                                <p className='font-bold'>20 feb 2024</p>
                            </div>
                            <h2 className='font-semibold text-xl'>{elem.title} </h2>
                            <p className='mt-2'>{elem.description}</p>
                            
                        </div>
                    )
                }

            })}
            
        </div>
    )
    }

    export default Tasks