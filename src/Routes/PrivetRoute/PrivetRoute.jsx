import { Navigate } from "react-router-dom";

const PrivetRoute = ({ children }) => {
    const user = true

    if (user) {
        return children;
    }
    return <Navigate to="/first-page" ></Navigate>
}

export default PrivetRoute