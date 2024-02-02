import { FaBars } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import { useGetUserByEmailQuery } from "../../redux/api/usersApi";
import Loading from "../Loading/Loading";
import { useGetClassLinkQuery } from "../../redux/api/classApi";


const Navbar = () => {


  const navigate = useNavigate()
  const handleLogOut = () => {
    localStorage.removeItem('token')
    localStorage.removeItem('email')
    navigate("first-page")
  }
  const email = localStorage.getItem('email')

  const { data, isLoading } = useGetUserByEmailQuery(email)
  const { data: classes } = useGetClassLinkQuery()
  if (isLoading) {
    return <Loading />
  }
  return (
    <div className="bg-background pt-5 px-3 fixed top-0 left-0 right-0 z-50 py-2">
      <div className="navbar container mx-auto border-[2px] h-[80px] rounded-md border-green-700 shadow-2xl">
        <Link to="/" className="flex-1">
          <img className="w-[100px] object-cover" src="/Logo.svg" alt="" />
          <Link to='/' className="btn btn-ghost text-xl md:text-4xl md:block hidden">Digital Earning Platform BD</Link>
        </Link>
        <div className="flex-none gap-2">

          <div className="dropdown dropdown-end">
            <div className=" border border-green-700 w-fit rounded-full  ">
              <label tabIndex={0} className="btn btn-ghost btn-circle avatar hover:bg-green-600 ">
                <FaBars className="text-2xl text-gray-700 hover:text-white " />
              </label>
            </div>
            <ul tabIndex={0} className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content  rounded-box w-52  font-semibold bg-white text-gray-700">
              <li>
                <Link to='/profile' className="justify-between">
                  Profile
                </Link>
              </li>
              {classes?.classesLinks?.map((classItem, index) => (
                <li key={index}>
                  <Link to={classItem?.classLink} target="_blank" className="justify-between">
                    {classItem?.name}
                  </Link>
                </li>
              ))}

              {data?.role === 'Admin' && <li>
                <Link to='/dashboard' className="justify-between">
                  Dashboard
                </Link>
              </li>}
              {(data.role === 'Manager') && (
                <li>
                  <Link to='/add-class-link' className="justify-between">
                    Add class Link
                  </Link>
                </li>
              )}

              {(data.role === 'Admin') && (
                <li>
                  <Link to='/add-class-link' className="justify-between">
                    Add class Link
                  </Link>
                </li>
              )}

              <li onClick={handleLogOut}>
                <Link>Logout</Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Navbar