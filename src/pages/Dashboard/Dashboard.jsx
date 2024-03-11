import { useState } from "react";
import Loading from "../../components/Loading/Loading";
import { useDeleteUserMutation, useGetUsersQuery, useUpdateUserByEmailMutation } from "../../redux/api/usersApi";
import { useNavigate } from "react-router-dom";
import UserDetails from "../UserDetails/UserDetails";

const Dashboard = () => {
    // eslint-disable-next-line no-unused-vars
    const email = localStorage.getItem('email');
    const { data: users, isLoading } = useGetUsersQuery();
    const [searchQuery, setSearchQuery] = useState('');
    const [currentPage, setCurrentPage] = useState(1);
    const [selectedUserEmail, setSelectedUserEmail] = useState(null)
    const [itemsPerPage] = useState(50);

    // Filter users
    const filteredUsers = users?.filter(user =>
        user?.firstName?.toLowerCase()?.includes(searchQuery?.toLowerCase()) ||
        user?.lastName?.toLowerCase()?.includes(searchQuery?.toLowerCase()) ||
        user?.email?.toLowerCase()?.includes(searchQuery?.toLowerCase())
    );

    // Pagination
    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentItems = filteredUsers?.slice(indexOfFirstItem, indexOfLastItem);
    const totalPages = Math.ceil(filteredUsers?.length / itemsPerPage);

    // Handle search
    const handleSearch = (e) => {
        setSearchQuery(e.target.value);
        setCurrentPage(1); // Reset to first page when searching
    };

    // Update user role
    const [updateUserByEmail] = useUpdateUserByEmailMutation();
    const updateRole = async (updatedRole, email) => {
        const updatedData = { role: updatedRole };
        try {
            const mutationResult = await updateUserByEmail({ updatedData, email });
            if (mutationResult) {
                alert("Role Updated Successfully");
            }
        } catch (error) {
            alert("User not Updated");
        }
    };

    // Delete user
    const navigate = useNavigate();
    const [deleteUser, { isLoading: deleteLoading }] = useDeleteUserMutation();
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

    // show user details
    const handleDetailsClick = (userEmail) => {
        setSelectedUserEmail(userEmail);
        document.getElementById('my_modal_1')?.showModal();
    };
    // Pagination control
    // eslint-disable-next-line no-unused-vars
    const paginate = (pageNumber) => {
        setCurrentPage(pageNumber);
    };

    if (isLoading) {
        return <Loading />;
    }
    if (deleteLoading) {
        return <Loading />;
    }



    return (
        <div className='max-w-[1280px] w-full mt-20 mx-auto overflow-x-scroll bg-green-500 py-10 rounded-md'>
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
            <div className="overflow-x-auto ">
                <div className="w-full overflow-x-auto">
                    <table className="table-auto w-full border border-gray-300">
                        <thead className="bg-gray-200">
                            <tr className="bg-slate-700 text-white text-xl">
                                <th className="border-b px-4 py-2 text-left">No</th>
                                <th className="border-b px-4 py-2 text-left">Name</th>
                                <th className="border-b px-4 py-2 text-left">Email</th>
                                <th className="border-b px-4 py-2 text-left">Unique Id</th>
                                <th className="border-b px-4 py-2 text-left">Action</th>
                                <th className="border-b px-4 py-2 text-left">Details</th>
                                <th className="border-b px-4 py-2 text-left">Delete</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-300">
                            {currentItems && currentItems.map((user, index) => (
                                <tr key={user?._id} className="bg-slate-700 text-white">
                                    <td className="border-b px-4 py-2">{indexOfFirstItem + index + 1}</td>
                                    <td className="border-b px-4 py-2">{`${user?.firstName} ${user?.lastName}`}</td>
                                    <td className="border-b px-4 py-2">{user?.email}</td>
                                    <td className="border-b px-4 py-2">{user?.uniqueId}</td>
                                    <td className="border-b px-4 py-2 text-gray-700">
                                        <select
                                            onChange={(e) => updateRole(e.target.value, user?.email)}
                                            className="block appearance-none w-full bg-white border border-gray-400 hover:border-gray-500 px-4 py-2 rounded shadow leading-tight focus:outline-none focus:shadow-outline"
                                        >
                                            <option className="font-semibold" value={user?.role}>{user?.role}</option>
                                            <option className="text-semibold" value="Manager">Manager</option>
                                            <option className="text-semibold" value="Student">Student</option>
                                            <option className="text-semibold" value="Admin">Admin</option>
                                        </select>
                                    </td>
                                    <td className="border-b px-4 py-2 text-blue-600 font-bold">
                                        <button onClick={() => handleDetailsClick(user?.email)}>Details</button>
                                    </td>
                                    <td onClick={() => handleDeleteUser(user?._id)} className="border-b px-4 py-2 text-red-600 font-bold cursor-pointer">
                                        <span>{deleteLoading ? "Deleting" : "Delete"}</span>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                        <UserDetails email={selectedUserEmail} />

                    </table>
                </div>
            </div>
            {/* Pagination */}
            <div className="flex justify-between items-center mt-4 px-8">
                <span className="text-gray-300">
                    Showing {indexOfFirstItem + 1} to {Math.min(indexOfLastItem, filteredUsers?.length)} of {filteredUsers?.length} entries
                </span>
                <div className="flex">
                    {Array.from({ length: totalPages }, (_, i) => (
                        <button
                            key={i + 1}
                            className={`mx-1 px-3 py-1 rounded ${currentPage === i + 1 ? 'bg-gray-300' : 'bg-gray-200 hover:bg-gray-300'}`}
                            onClick={() => setCurrentPage(i + 1)}
                        >
                            {i + 1}
                        </button>
                    ))}
                </div>
            </div>

        </div>
    );
}

export default Dashboard;
