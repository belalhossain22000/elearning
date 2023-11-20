import { FaRegCheckCircle } from "react-icons/fa";
import { Link } from "react-router-dom";
const FirstPage = () => {
    return (
        <div className="container mx-auto bg-blue-400 p-5  h-[100vh] flex flex-col items-center justify-center text-white">
            <div className="flex items-center gap-5">
                <FaRegCheckCircle className="text-green-500 font-bold text-[100px]" />
                <h3 className="font-bold text-4xl leading-[150%]">Digital Earning Platform BD</h3>
            </div>
            <p className="md:text-2xl text-xl my-5 ">Its a learning and earning process by using your valuable free time at home through your smart phone only it is a very easy process on your won mother tongue and you can earn from out community with selling some courses services or goods</p>
            <div className="flex items-center justify-center gap-10 my-5">
                <Link to='/login'>
                    <button className="btn btn-outline  text-xl px-8 ">Login</button>

                </Link>
                <Link to='/sign-up'>
                    <button className="btn btn-outline text-xl px-8 btn-primary">SignUp</button>
                </Link>
            </div>
        </div>
    )
}

export default FirstPage