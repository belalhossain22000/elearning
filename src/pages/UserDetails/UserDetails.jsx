import Loading from "../../components/Loading/Loading";
import { useGetUserByEmailQuery } from "../../redux/api/usersApi";

const UserDetails = ({ email }) => {
    const { data: user, isLoading } = useGetUserByEmailQuery(email)
    if (isLoading) {
        return <Loading />
    }
    const fullName = `${user?.firstName} ${user?.lastName}`;
    console.log(user)
    return (
        <>
            <dialog id="my_modal_1" className="modal">
                <div className="modal-box">
                    <div className="bg-green-200 p-4 rounded-lg shadow-md">
                        <h2 className="text-lg font-semibold mb-2">User Details</h2>
                        <div className="flex gap-2 items-center">
                            <p className="text-green-700 font-medium">Full Name:</p>
                            <p className="text-green-900">{fullName}</p>
                        </div>
                        <div className="flex gap-2 items-center">
                            <p className="text-green-700 font-medium">Language:</p>
                            <p className="text-green-900">{user?.language}</p>
                        </div>
                        <div className="flex gap-2 items-center">
                            <p className="text-green-700 font-medium">Country:</p>
                            <p className="text-green-900">{user?.country}</p>
                        </div>
                        <div className="">
                            <p className="text-green-700 font-medium">WhatsApp Number:</p>
                            <p className="text-green-900">{user?.whatsAppNumber}</p>
                        </div>
                        <div className="flex gap-2 items-center">
                            <p className="text-green-700 font-medium">Phone Number:</p>
                            <p className="text-green-900">{user?.phoneNumber}</p>
                        </div>
                        <div className="">
                            <p className="text-green-700 font-medium">Email:</p>
                            <p className="text-green-900">{user?.email}</p>
                        </div>
                        <div className="flex gap-2 items-center">
                            <p className="text-green-700 font-medium">Password:</p>
                            <p className="text-green-900">{user?.password}</p>
                        </div>
                        <div className="flex gap-2 items-center">
                            <p className="text-green-700 font-medium">Reference Number:</p>
                            <p className="text-green-900">{user?.referenceNumber}</p>
                        </div>
                        <div className="flex gap-2 items-center">
                            <p className="text-green-700 font-medium">Unique ID:</p>
                            <p className="text-green-900">{user?.uniqueId}</p>
                        </div>
                        <div className="flex gap-2 items-center">
                            <p className="text-green-700 font-medium">Role:</p>
                            <p className="text-green-900">{user?.role}</p>
                        </div>
                    </div>
                    <div className="modal-action">
                        <form method="dialog">
                            <button className="btn">Close</button>
                        </form>
                    </div>
                </div>
            </dialog>
        </>
    );
};

export default UserDetails;
