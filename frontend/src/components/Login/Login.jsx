import React, { useState } from 'react'

const Login = ({handleLogin}) => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault()
        handleLogin(email, password)
        setEmail('')
        setPassword('')
    }

    

  return (
    <div className='flex h-screen w-screen items-center justify-center '>
        <div className='border-2 border-emerald-600 rounded-xl p-20'>
            <form onSubmit={handleSubmit} className='flex flex-col items-center justify-center'>
                <input required type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder='Enter your email' className='mb-3 border-2 border-emerald-300 placeholder:text-gray-400 rounded-full py-2 px-4' />
                <input required type="password" value={password} placeholder='Enter your password' onChange={(e) => setPassword(e.target.value)} className='mb-3 placeholder:text-gray-400 border-2 border-emerald-300 rounded-full py-2 px-4' />
                <button type="submit" className=' w-20 bg-emerald-600 rounded-full py-3 px-4'>Login</button>
            </form>
        </div>
        
    </div>
  )
}

export default Login