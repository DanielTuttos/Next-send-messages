"use client"
import React from 'react'

const Page = () => {

  const onSubmit = async (e) => {
    e.preventDefault()
    const formData = new FormData(e.target)
    const sms = {
      phone: formData.get('phone'),
      message: formData.get('message')
    }
    const resp = await fetch('/api/sms', {
      method: 'POST',
      body: JSON.stringify(sms),
      headers: {
        'Content-Type': 'application/json'
      }
    })
    const data = await resp.json()
    console.log('dtaa: ', data)
    alert('Message sent')
  }

  return (
    <div className='flex items-center justify-center h-screen'>
      <form
        className='bg-slate-900 p-10'
        onSubmit={onSubmit}
      >
        <h1 className='text-white text-3xl font-bold'>Send an SMS</h1>
        <label className='text-white block my-4'>
          Write your phone number here:
        </label>
        <input
          name='phone'
          className='px-3 py-1 rounded-md block w-full'
          type='tel'
          placeholder='Write your number here'
          autoComplete='off'
        />
        <label className='text-white block my-4'>
          Write your message here:
        </label>
        <textarea
          className='px-3 py-1 rounded-md block w-full'
          name='message'
          placeholder='Write your message here'
        ></textarea>
        <button
          className='bg-blue-500 text-white px-3 py-1 rounded-md block mt-4'
        >
          Send
        </button>
      </form>
    </div>
  )
}

export default Page