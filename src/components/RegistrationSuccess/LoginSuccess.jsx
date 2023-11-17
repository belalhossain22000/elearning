import { IoMdCheckmarkCircleOutline } from "react-icons/io";
import { Link } from "react-router-dom";
const LoginSuccess = () => {
    return (
        <div className="container mx-auto flex items-center flex-col justify-center gap-5  h-[100vh]">
            <IoMdCheckmarkCircleOutline className="text-green-500 font-semibold lg:text-[200px] text-[100px]" />
            <p className="font-semibold text-lg">Congratulation your account has been successfully created</p>
            <p className="font-semibold text-lg">Your email: <span className="font-bold text-green-500">example@gmail.com</span></p>
            <p className="font-semibold text-lg">Your password: <span className="font-bold text-red-600">123456</span></p>

            <p className="font-semibold text-lg">Login your account <Link to='/login'><button className="btn btn-primary text-white font-semibold">Click here</button></Link></p>



        </div>
    )
}

export default LoginSuccess