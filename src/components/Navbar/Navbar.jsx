import { FaBars } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate()
  const handleLogOut = () => {
    localStorage.removeItem('token')
    localStorage.removeItem('email')
    navigate("first-page")
  }

  return (
    <div className="navbar bg-base-100 container mx-auto">
      <Link to="/" className="flex-1">
        <img className="w-[100px] object-cover" src="/Logo.svg" alt="" />
        <Link to='/' className="btn btn-ghost text-xl md:text-4xl md:block hidden">Digital Earning Platform BD</Link>
      </Link>
      <div className="flex-none gap-2">

        <div className="dropdown dropdown-end">
          <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
            <FaBars className="text-2xl" />
          </label>
          <ul tabIndex={0} className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content  rounded-box w-52  font-semibold bg-gray-500 text-white">
            <li>
              <Link to='/profile' className="justify-between">
                Profile
              </Link>
            </li>
            <li onClick={handleLogOut}><Link>Logout</Link></li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Navbar