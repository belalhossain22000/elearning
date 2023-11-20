import { Navigate } from "react-router-dom";

const PrivetRoute = ({ children }) => {
    const user = false
    const token = localStorage.getItem('token');
    if (token) {
        return children;
    }
    return <Navigate to="/first-page" ></Navigate>
}

export default PrivetRoute