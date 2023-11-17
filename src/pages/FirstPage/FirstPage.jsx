import { FaRegCheckCircle } from "react-icons/fa";
import { Link } from "react-router-dom";
const FirstPage = () => {
    return (
        <div className="container mx-auto bg-blue-300 p-5 h-[100vh] flex flex-col items-center justify-center">
            <div className="flex items-center gap-5">
                <FaRegCheckCircle className="text-green-600 font-bold text-[100px]" />
                <h3 className="font-bold text-4xl leading-[150%]">Digital E-learning platfrom bd</h3>
            </div>
            <p className="md:text-2xl text-xl my-5 ">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dignissimos, eligendi? Quam, ipsum et consectetur reiciendis laborum similique molestiae repellendus illo. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas consequuntur porro eaque, mollitia voluptas atque sint totam pariatur sequi velit!</p>
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