import { IoMdCheckmarkCircleOutline } from "react-icons/io";
import { Link } from "react-router-dom";
import { useGetUserByEmailQuery } from "../../redux/api/usersApi";
import { useSelector } from "react-redux";
const LoginSuccess = () => {
    const userEmail = useSelector((state) => state.userEmail.email);
    const { data, isLoading } = useGetUserByEmailQuery(userEmail)
    // console.log(data.password)

    if (isLoading) {
        return <h1>Loading...</h1>
    }
    return (
        <div className="container mx-auto flex items-center flex-col justify-center gap-5  h-[100vh]">
            <IoMdCheckmarkCircleOutline className="text-green-500 font-semibold lg:text-[200px] text-[100px]" />
            <p className="font-semibold text-lg">Congratulation your account has been successfully created</p>
            <p className="font-semibold text-lg">Your email: <span className="font-bold text-green-500">{data?.email}</span></p>
            <p className="font-semibold text-lg">Your password: <span className="font-bold text-red-600">{data?.password}</span></p>

            <p className="font-semibold text-lg">Login your account <Link to='/login'><button className="btn btn-primary text-white font-semibold">Click here</button></Link></p>



        </div>
    )
}

export default LoginSuccess