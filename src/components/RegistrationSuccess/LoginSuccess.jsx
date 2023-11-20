import { useContext } from "react";
import { IoMdCheckmarkCircleOutline } from "react-icons/io";
import { Link } from "react-router-dom";
import { DataContext } from "../../provider/ContextProvider/ContextProvider";
const LoginSuccess = () => {
    const { regInfo } = useContext(DataContext)
    const { email, password } = regInfo?.user || {}
    return (
        <div className="container mx-auto flex items-center flex-col justify-center gap-5  h-[100vh]">
            <IoMdCheckmarkCircleOutline className="text-green-500 font-semibold lg:text-[200px] text-[100px]" />
            <p className="font-semibold text-lg">Congratulation your account has been successfully created</p>
            <p className="font-semibold text-lg">Your email: <span className="font-bold text-green-500">{email}</span></p>
            <p className="font-semibold text-lg">Your password: <span className="font-bold text-red-600">{password}</span></p>

            <p className="font-semibold text-lg">Login your account <Link to='/login'><button className="btn btn-primary text-white font-semibold">Click here</button></Link></p>



        </div>
    )
}

export default LoginSuccess