"use client"

import { addContact } from "@/lib/action"
import Input from "./Input"

const CreateForm = () => (
 <div>
  <form action={addContact} className="rounded bg-gray-100 items-center p-2">
   <div className="flex mb-4">
    <div className="w-1/2 pr-2">
     <label className="text-gray-700">First Name</label>
     <Input
      type="text"
      name="firstName"
      placeholder="First Name"
     />
    </div>
    <div className="w-1/2 pr-2">
     <label className="text-gray-700">Last Name</label>
     <Input
      type="text"
      name="lastName"
      placeholder="Last Name"
     />
    </div>
   </div>
   <div className="flex mb-4">
    <div className="w-1/2 pr-2">
     <label className="text-gray-700">Email</label>
     <Input
      type="text"
      name="email"
      placeholder="Email"
     />
    </div>
    <div className="w-1/2 pr-2">
     <label className="text-gray-700">Phone</label>
     <Input
      type="number"
      name="phone"
      placeholder="Phone"
     />
    </div>
   </div>
   <button type="submit" className="btn btn-wide bg-orange-400">Create Contact</button>
  </form>
 </div>
)

export default CreateForm