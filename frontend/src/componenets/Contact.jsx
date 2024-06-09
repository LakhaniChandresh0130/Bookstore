import React from 'react'
import { Link } from 'react-router-dom'
import { useForm } from "react-hook-form"

function Contact() {
    const {
        register,
        handleSubmit,
        formState: { errors },
      } = useForm()
    
      const onSubmit = (data) => console.log(data)
  return (
    <>
        <div className="">
        <div className="flex h-screen items-center justify-center ">
      <div  className=" w-[600px]  ">
    <div className="modal-box ">
        <form method="dialog" onSubmit={handleSubmit(onSubmit)}>
      {/* if there is a button in form, it will close the modal */}
            <Link to="/" className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</Link>
        
        <h3 className="font-bold text-lg">Contact US</h3>
        <div className="mt-4 space-y-2">
            <span>Name</span>
            <br />
            <input type="text" {...register("name", { required: true })} placeholder='Enter your Name' className="w-80 px-3 py-1 border rounded-md outline-none" />
            <br />
            {errors.name && <span className="text-red-500">This field is required</span>}
        </div>
        <div className="mt-11 space-y-2">
            <span>Email</span>
            <br />
            <input type="email" {...register("email", { required: true })} placeholder='Enter your Email' className="w-80 px-3 py-1 border rounded-md outline-none" />
            <br />
            {errors.email && <span className="text-red-500">This field is required</span>}
        </div>
        <div className="mt-11 space-y-2">
            <span>Massage</span>
            <br />
            <textarea {...register("message", { required: true })} placeholder='Enter your Message' className="w-80 px-3 py-1 border rounded-md outline-none " rows="4" cols="10"></textarea>
            <br />
            {errors.message && <span className="text-red-500">This field is required</span>}
        </div>
        <div className="flex justify-around mt-4">
            <button className="bg-pink-500 text-white rounded-md px-3 py-1 hover:bg-pink-700 duration-200">Submit</button>
            
        </div>
        </form>
    </div>
    </div>
    </div>
        </div>
    </>
  )
}

export default Contact
