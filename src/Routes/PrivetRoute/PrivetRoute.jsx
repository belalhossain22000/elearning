import { Navigate } from "react-router-dom";

const PrivetRoute = ({ children }) => {
    // const user = true
    // eslint-disable-next-line no-unused-vars
    const token = localStorage.getItem('token');
    if (token) {
        return children;
    }
    return <Navigate to="/first-page" ></Navigate>
}

export default PrivetRoute