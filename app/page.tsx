import Link from "next/link"
import Navbar from "@/components/Navbar"
import HeadingText from "@/components/HeadingText"
import { FiEdit, FiTrash } from "react-icons/fi"
import { getContacts } from "@/lib/data"
import { deleteContact } from "@/lib/action"

const HomePage = async () => {
  const contacts = await getContacts()

  return (
    <main>
      <HeadingText
        title="Contacts"
        description="All contacts"
      />
      <Navbar />
      <div className="flex flex-col p-4">
        <table className="table-auto w-full text-center whitespace-nowrap">
          <thead>
            <tr>
              <th className="px-4 py-3 title-font text-center tracking-wider font-medium text-gray-700 text-sm bg-gray-100 rounded-tl rounded-bl">First Name</th>
              <th className="px-4 py-3 title-font text-center tracking-wider font-medium text-gray-700 text-sm bg-gray-100">Last Name</th>
              <th className="px-4 py-3 title-font text-center tracking-wider font-medium text-gray-700 text-sm bg-gray-100">Email</th>
              <th className="px-4 py-3 title-font text-center tracking-wider font-medium text-gray-700 text-sm bg-gray-100">Phone</th>
              <th className="px-4 py-3 title-font text-center tracking-wider font-medium text-gray-700 text-sm bg-gray-100">Action</th>
            </tr>
          </thead>
          <tbody>
            {contacts.map((item) => (
              <tr key={item.id}>
                <td className="border-t-2 text-center border-gray-200 px-4 py-3">{item.firstName}</td>
                <td className="border-t-2 text-center border-gray-200 px-4 py-3">{item.lastName}</td>
                <td className="border-t-2 text-center border-gray-200 px-4 py-3">{item.email}</td>
                <td className="border-t-2 text-center border-gray-200 px-4 py-3">{item.phone}</td>
                <td className="border-t-2 text-center border-gray-200 px-4 py-3 flex items-center gap-1">
                  <Link href={`/contact/${item.id}`}>
                    <button className="btn">
                      <FiEdit />
                    </button>
                  </Link>
                  <form action={deleteContact}>
                    <input
                      name="id"
                      value={item.id}
                      hidden
                    />
                    <button type="submit" className="btn">
                      <FiTrash style={{ color: "red" }} />
                    </button>
                  </form>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </main>
  )
}

export default HomePage