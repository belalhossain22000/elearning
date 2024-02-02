import BtnPrimary from "../../utils/BtnPrimary"
import { IoBook } from "react-icons/io5";
import { FaRegStar } from "react-icons/fa";

const Banner = () => {
    return (
        <div className="bg-background mb-10 pt-[150px]">
            <div className="flex md:flex-row flex-col px-3 items-start container mx-auto">
                <div className="md:w-1/2">
                    <img className="md:block hidden" src="dotyellow.webp" alt="" />
                    <p className="text-xl text-[#309255] font-semibold mb-8">Start your Favorite Course</p>

                    <h2 className=" text-5xl mb-10"><span className="text-gray-700">Now learning from anywhere, and build</span> <span className="text-green-600">your bright career.</span></h2>

                    <p className="text-lg mb-10">It has survived not only five centuries but also the leap into electronic typesetting.</p>
                    <BtnPrimary>Start A Course</BtnPrimary>
                </div>

                <div className="md:1/2 relative">

                    <div className="bg-green-600 h-[100px] w-[100px] md:h-[150px] md:w-[150px] rounded-full flex flex-col items-center justify-center md:text-2xl text-lg absolute top-12 left-12">
                        <IoBook color="white" />
                        <p className="font-bold text-white">5 + Course</p>
                        <p className="font-bold text-white">Active</p>
                    </div>
                    <img className="w-full object-cover" src="slidePerson.webp" alt="" />

                    <div className="md:h-[150px] md:w-[150px] h-[100px] w-[100px] bg-white rounded-full flex flex-col justify-center items-center absolute top-12 right-0 ">
                        <p className="flex items-center gap-2 md:gap-5"><span className="font-bold text-lg md:text-4xl text-green-600">4.8 </span><span className="md:text-xl text-yellow-600"><FaRegStar /></span></p>
                        <p className="md:text-lg text-gray-500">Ratings (56k)</p>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Banner