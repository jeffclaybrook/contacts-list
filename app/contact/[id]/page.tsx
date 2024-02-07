import { getContact } from "@/lib/data"
import { updateContact } from "@/lib/action"
import Input from "@/components/Input"
import HeadingText from "@/components/HeadingText"
import Navbar from "@/components/Navbar"

const SingleContact = async ({ params }: { params: any }) => {
 const { id } = params
 const contact = await getContact(id)

 return (
  <section>
   <HeadingText
    title="Contact"
    description="View and update contact"
   />
   <Navbar />
   <div className="flex flex-col py-4 px-4">
    <form action={updateContact} className="bg-gray-100 flex flex-col items-center p-2 rounded">
     <div className="flex mb-4">
      <div className="w-1/2 pr-2">
       <input
        type="text"
        name="id"
        value={contact.id}
        hidden
       />
       <label className="text-gray-700">First Name</label>
       <Input
        type="text"
        name="firstName"
        placeholder={contact.firstName}
       />
      </div>
      <div className="w-1/2 pr-2">
       <label className="text-gray-700">Last Name</label>
       <Input
        type="text"
        name="lastName"
        placeholder={contact.lastName}
       />
      </div>
     </div>
     <div className="flex mb-4">
      <div className="w-1/2 pr-2">
       <label className="text-gray-700">Email</label>
       <Input
        type="text"
        name="email"
        placeholder={contact.email}
       />
      </div>
      <div className="w-1/2 pr-2">
       <label className="text-gray-700">Phone</label>
       <Input
        type="number"
        name="phone"
        placeholder={contact.phone}
       />
      </div>
     </div>
     <button type="submit" className="btn btn-wide bg-orange-400">Update Contact</button>
    </form>
   </div>
  </section>
 )
}

export default SingleContact