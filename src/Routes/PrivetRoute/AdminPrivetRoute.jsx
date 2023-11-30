import { Navigate } from "react-router-dom";
import { useGetUserByEmailQuery } from "../../redux/api/usersApi";
import Loading from "../../components/Loading/Loading";


const AdminPrivetRoute = ({ children }) => {
    const token = localStorage.getItem('token');
    const emial = localStorage.getItem('email')

    const { data, isLoading } = useGetUserByEmailQuery(emial)
    if (isLoading) {
        return <Loading />
    }
    if (token && data?.role === "Admin") {
        return children;
    }
    return <Navigate to="/" ></Navigate>
}

export default AdminPrivetRoute