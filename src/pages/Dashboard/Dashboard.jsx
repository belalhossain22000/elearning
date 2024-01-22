import { useState } from "react"
import Loading from "../../components/Loading/Loading"
import { useDeleteUserMutation, useGetUserByEmailQuery, useGetUsersQuery, useUpdateUserByEmailMutation } from "../../redux/api/usersApi"
import { Link, useNavigate } from "react-router-dom"

const Dashboard = () => {

    const email = localStorage.getItem('email')
    const { data: users, isLoading } = useGetUsersQuery()
    const [searchQuery, setSearchQuery] = useState('');

    // filter user
    const filteredUsers = users?.filter(user =>
        user?.firstName?.toLowerCase()?.includes(searchQuery?.toLowerCase()) ||
        user?.lastName?.toLowerCase()?.includes(searchQuery?.toLowerCase()) ||
        user?.email?.toLowerCase()?.includes(searchQuery?.toLowerCase())
    );

    // search button
    const handleSearch = (e) => {
        setSearchQuery(e.target.value);
    }
    // get user by email redux
    const { data: user } = useGetUserByEmailQuery(email)

    //update user by email
    // eslint-disable-next-line no-unused-vars
    const [updateUserByEmail, { isLoading: loading }] = useUpdateUserByEmailMutation()

    const updateRole = async (updatedRole, email) => {
        const updatedData = { role: updatedRole }
        try {

            const mutationResult = await updateUserByEmail({ updatedData, email });
            if (mutationResult) {

                alert("Role Updated Successfully")

            }
        } catch (error) {
            alert("User not Updated")
        }

    };
    const navigate = useNavigate()

    const [deleteUser, { isLoading: deleteLoading }] = useDeleteUserMutation()
    const handleDeleteUser = async (id) => {
        const ans = window.confirm("Are you sure you want to delete the user?");

        try {
            if (ans) {
                await deleteUser(id);
                alert("User deleted successfully");
                navigate("/dashboard");
            } else {
                alert("User deletion canceled");
                navigate("/dashboard");
            }
        } catch (error) {
            alert(`Error deleting user: ${error.message}`);
            navigate("/dashboard");
        } finally {
            navigate("/dashboard");
        }
    };


    if (isLoading) {
        return <Loading />
    }
    if (deleteLoading) {
        return <Loading />
    }


    return (
        <div className='max-w-[1280px] w-full mx-auto overflow-x-scroll bg-slate-700 py-10 rounded-md'>

            <div className="mb-4 mx-auto flex items-center justify-center flex-col gap-2">
                <label htmlFor="search" className="font-semibold text-xl pb-2 text-white">Search User Name or Email</label>
                <input
                    id="search"
                    type="text"
                    placeholder="Search by name or email"
                    value={searchQuery}
                    onChange={handleSearch}
                    className="px-4 py-2 border border-gray-300 rounded w-[90%] "
                />
            </div>
            {user?.role === 'Admin' && (
                <div className="overflow-x-auto ">
                    <div className="w-full overflow-x-auto">
                        <table className="table-auto w-full border border-gray-300">
                            {/* head */}
                            <thead className="bg-gray-200">
                                <tr className="bg-slate-700 text-white text-xl">
                                    <th className="border-b px-4 py-2 text-left">No</th>
                                    <th className="border-b px-4 py-2 text-left">Name</th>
                                    <th className="border-b px-4 py-2 text-left">Email</th>
                                    <th className="border-b px-4 py-2 text-left">Unique Id</th>
                                    <th className="border-b px-4 py-2 text-left">Action</th>
                                    <th className="border-b px-4 py-2 text-left">Details</th>
                                    <th className="border-b px-4 py-2 text-left">Delete</th>
                                    {/* Add more column headers as needed */}
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-gray-300">
                                {filteredUsers && filteredUsers?.map((user, index) => (
                                    <tr key={user?._id} className="bg-slate-700 text-white">
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
                                            {user?.uniqueId}
                                        </td>
                                        <td className="border-b px-4 py-2 text-gray-700">
                                            <select
                                                onChange={(e) => updateRole(e.target.value, user?.email)}
                                                className="block appearance-none w-full bg-white border border-gray-400 hover:border-gray-500 px-4 py-2 rounded shadow leading-tight focus:outline-none focus:shadow-outline"
                                            >
                                                <option className="font-semibold" value={user?.role}>{user?.role}</option>
                                                <option className="text-semibold" value="Manager">Manager</option>
                                                <option className="text-semibold" value="Student">Student</option>
                                                {/* Add more options as needed */}
                                            </select>
                                        </td>

                                        <td className="border-b px-4 py-2 text-blue-600 font-bold">
                                            <Link to={`/`}>Details</Link>
                                        </td>

                                        <td onClick={() => handleDeleteUser(user?._id)} className="border-b px-4 py-2 text-red-600 font-bold">
                                            <Link to="/">{deleteLoading ? "Deleting" : "Delete"}</Link>
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