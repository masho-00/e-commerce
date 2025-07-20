import React from 'react'
import { useState } from 'react'
import { Link } from 'react-router-dom'

const Form = () => {
    const [name, setName]=useState('')
    const [email, setEmail]=useState('')
    const [password, setPassword]=useState('')
    const [submitTerm, setSubmitTerm]=useState(true)

  return (
    <div className='max-w-xl mt-5 mx-auto p-4 border-2 border-cyan-100 shadow-md '>
        <h1 className='text-center font-bold py-4'>{submitTerm ? 'Register': 'Login'} here</h1>
        <form className='my-4'>
            <div className='py-4 flex gap-4 items-center'>
               <label htmlFor="name">Name:</label>
            <input type="text" id='name' autoComplete='true' value={name} onChange={(e)=> setName(e.target.value)} placeholder='Your Name' className='outline-none border-2 border-cyan-50 px-4 py-2 flex-grow rounded-md'/>  
            </div>
            <div className='py-4 flex gap-4 items-center'>
               <label htmlFor="email">Email:</label>
            <input type="email" id='email' autoComplete='true' value={email} onChange={(e)=> setEmail(e.target.value)} placeholder='Your Email' className='outline-none border-2 border-cyan-50 px-4 py-2 flex-grow rounded-md'/>  
            </div>
            <div className='py-4 flex gap-4 items-center'>
               <label htmlFor="password">Password:</label>
            <input type="password" id='password' autoComplete='true' value={password} onChange={(e)=> setPassword(e.target.value)} placeholder='Your Password' className='outline-none border-2 border-cyan-50 px-4 py-2 flex-grow rounded-md'/>  
            </div>
            <div className='flex gap-6 items-center'>
                <button type='submit' className='px-4 py-2 text-gray-50 bg-cyan-500 hover:bg-cyan-700 rounded-lg'>{submitTerm ? 'Register': 'Login'}</button>or 
                <Link className='text-purple-400 underline' to={`{submitTerm ?'Login' : 'Register'}`}>{submitTerm ?'Login' : 'Register'} here</Link> 
            </div>
                     
        </form>
    </div>
  )
}

export default Form