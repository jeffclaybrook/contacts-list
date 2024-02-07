import Link from "next/link"
import { FiHome, FiPlusCircle } from "react-icons/fi"

const Navbar = () => (
 <nav>
  <Link href={"/"} className="flex items-center gap-1">
   <FiHome />
   <span>Home</span>
  </Link>
  <Link href={"/create"}>
   <button className="btn">
   <FiPlusCircle />
    Create
   </button>
  </Link>
 </nav>
)

export default Navbar