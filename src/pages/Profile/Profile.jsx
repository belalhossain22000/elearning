import { Link } from "react-router-dom"
import Table from "./Table"
import { useGetUserByEmailQuery } from "../../redux/api/usersApi"
import Loading from "../../components/Loading/Loading"

const Profile = () => {
    const emial = localStorage.getItem('email')
    const { data, isLoading } = useGetUserByEmailQuery(emial)
    if (isLoading) {
        return <Loading />
    }

    // console.log(data)
    const { firstName, lastName, uniqueId } = data || {}
    return (
        <div className="container mx-auto mt-32">
            <div className="flex gap-6 md:gap-10 items-center justify-center">
                <div className="avatar">
                    <div className="w-24 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                        <img src="data:image/png;base64,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" />
                    </div>
                </div>
                <div className="flex items-start flex-col gap-3">
                    <h3 className="font-semibold text-3xl">{`${firstName} ${lastName}`}</h3>
                    <p className="font-semibold text-lg">{uniqueId}</p>
                </div>
            </div>
            <div className="mt-10">
                <h3 className="text-3xl font-semibold text-center">About</h3>
                <Table data={data} />
            </div>
            <div className="flex items-center justify-center mt-5">
                <Link className="btn btn-primary " to="/update-profile">Update Profile</Link>
            </div>
        </div >
    )
}

export default Profile