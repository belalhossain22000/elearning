import { useState } from "react"
import Loading from "../../components/Loading/Loading"
import { useGetUserByEmailQuery, useGetUsersQuery } from "../../redux/api/usersApi"
import { Link } from "react-router-dom"

const Dashboard = () => {
    const email = localStorage.getItem('email')
    const { data: users, isLoading } = useGetUsersQuery()
    const [searchQuery, setSearchQuery] = useState('');

    const filteredUsers = users?.filter(user =>
        user.firstName.toLowerCase().includes(searchQuery.toLowerCase()) ||
        user.lastName.toLowerCase().includes(searchQuery.toLowerCase()) ||
        user.email.toLowerCase().includes(searchQuery.toLowerCase())
    );

    const handleSearch = (e) => {
        setSearchQuery(e.target.value);
    }
    const { data: user } = useGetUserByEmailQuery(email)
    if (isLoading) {
        return <Loading />
    }

    if (isLoading) {
        return <Loading />
    }

    return (
        <div className='max-w-[1280px] w-full mx-auto overflow-x-scroll'>

            <div className="mb-4 mx-auto flex items-center justify-center flex-col gap-2">
                <label htmlFor="search" className="font-semibold text-xl">Search User</label>
                <input
                    id="search"
                    type="text"
                    placeholder="Search by name or email"
                    value={searchQuery}
                    onChange={handleSearch}
                    className="px-4 py-2 border border-gray-300 rounded "
                />
            </div>
            {user?.role === 'Admin' && (
                <div className="overflow-x-auto">
                    <div className="w-full overflow-x-auto">
                        <table className="table-auto w-full border border-gray-300">
                            {/* head */}
                            <thead className="bg-gray-200">
                                <tr>
                                    <th className="border-b px-4 py-2 text-left">No</th>
                                    <th className="border-b px-4 py-2 text-left">Name</th>
                                    <th className="border-b px-4 py-2 text-left">Email</th>
                                    <th className="border-b px-4 py-2 text-left">Action</th>
                                    <th className="border-b px-4 py-2 text-left">Update</th>
                                    <th className="border-b px-4 py-2 text-left">Delete</th>
                                    <th className="border-b px-4 py-2 text-left">Details</th>
                                    {/* Add more column headers as needed */}
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-gray-300">
                                {filteredUsers && filteredUsers?.map((user, index) => (
                                    <tr key={user?._id} className="bg-white">
                                        <td className="border-b px-4 py-2">
                                            {index + 1}
                                        </td>
                                        <td className="border-b px-4 py-2">
                                            {`${user?.firstName} ${user?.lastName}`}
                                        </td>
                                        <td className="border-b px-4 py-2">
                                            {user?.email}
                                        </td>
                                        <td className="border-b px-4 py-2">
                                            <select
                                                className="block appearance-none w-full bg-white border border-gray-400 hover:border-gray-500 px-4 py-2 rounded shadow leading-tight focus:outline-none focus:shadow-outline"
                                            >

                                                {/* <option className="text-semibold" >Select Role</option> */}
                                                <option className="font-semibold" value={user?.role}>{user?.role}</option>
                                                <option className="text-semibold" value="Manager">Manager</option>
                                                <option className="text-semibold" value="Student">Student</option>
                                                {/* Add more options as needed */}
                                            </select>
                                        </td>


                                        <td className="border-b px-4 py-2 text-green-600 font-bold">
                                            <Link to="/">Update</Link>
                                        </td>
                                        <td className="border-b px-4 py-2 text-red-600 font-bold">
                                            <Link to="/">Delete</Link>
                                        </td>
                                        <td className="border-b px-4 py-2 text-blue-600 font-bold">
                                            <Link to="/">Details</Link>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            )
            }
        </div >

    )
}

export default Dashboard