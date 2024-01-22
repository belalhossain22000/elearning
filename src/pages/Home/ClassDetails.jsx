
import { FaRegStar } from "react-icons/fa";
import { MdAccessTimeFilled } from "react-icons/md";
import { IoVideocamSharp } from "react-icons/io5";
import { GiLevelEndFlag } from "react-icons/gi";
import { MdOutlineLanguage } from "react-icons/md";
import { FaBook } from "react-icons/fa";

import { useParams } from "react-router-dom"
import { classData } from "../../data/data"
import BtnPrimary from "../../utils/BtnPrimary";


const ClassDetails = () => {
    const { id } = useParams()

    const singleClass = classData.find(c => c._id == id)
    const { 
        image,
        className,
        duration,
        lectures,
        level,
        language,
        
        enrollStudents,
        rating,
        totalRating
    } = singleClass || {}
  

    return (
        <div className="container mx-auto my-10 flex md:flex-row flex-col  gap-10 px-3 spa ">
            {/* left side */}
            <div className="md:w-1/2 w-full">
                <div>
                    <img className="w-full object-cover h-auto rounded-lg" src={image} alt="Course image" />
                </div>
                <div className="mt-8">
                    <h2 className="font-semibold text-2xl">{className} </h2>
                    <div className="flex items-center justify-between mt-3">
                        <p className=" text-lg text-green-500">({enrollStudents}) <span className="text-gray-500">Enrolled Students </span></p>
                        <div className="flex items-center gap-x-3">
                            <p className="text-green-500">
                                {rating}
                            </p>
                            <div className="flex items-center">
                                <span className="text-yellow-400"><FaRegStar /></span>
                                <span className="text-yellow-400"><FaRegStar /></span>
                                <span className="text-yellow-400"><FaRegStar /></span>
                                <span className="text-yellow-400"><FaRegStar /></span>
                                <span className="text-yellow-400"><FaRegStar /></span>
                            </div>

                            <p className="text-green-500">({totalRating} <span className="text-gray-700">Ratings)</span></p>
                        </div>
                    </div>
                </div>
            </div>
            {/* right side */}
            <div className="md:w-1/2 bg-background py-10 rounded-lg border-[1px] border-green-300">
                <div className=" pb-12">
                    <h3 className="text-3xl text-green-600 font-bold text-center">$ 399</h3>
                </div>
                <div className="px-10">
                    <div className="flex items-center justify-between p-3  border-t-[3px]  border-green-100 ">
                        <p className="font-semibold text-lg flex items-center gap-1"><MdAccessTimeFilled color="green" /> <span>Duration</span></p>
                        <p className="text-gray-500">{duration}</p>
                    </div>
                    <div className="flex items-center justify-between p-3  border-t-[3px]  border-green-100 ">
                        <p className="font-semibold text-lg flex items-center gap-1"><IoVideocamSharp color="green" /> <span>Lectures</span></p>
                        <p className="text-gray-500">{lectures}</p>
                    </div>
                    <div className="flex items-center justify-between p-3  border-t-[3px]  border-green-100 ">
                        <p className="font-semibold text-lg flex items-center gap-1"><GiLevelEndFlag color="green" /> <span>Level</span></p>
                        <p className="text-gray-500">{level}</p>
                    </div>
                    <div className="flex items-center justify-between p-3  border-t-[3px]  border-green-100 ">
                        <p className="font-semibold text-lg flex items-center gap-1"><MdOutlineLanguage color="green" /> <span>Language</span></p>
                        <p className="text-gray-500">{language}</p>
                    </div>
                    <div className="flex items-center justify-between p-3  border-t-[3px] border-b-[3px] border-green-100 ">
                        <p className="font-semibold text-lg flex items-center gap-1"><FaBook color="green" /> <span>Certificate</span></p>
                        <p className="text-gray-500">Yes</p>
                    </div>
                </div>
                <div className="pt-10 flex items-center justify-center">
                <BtnPrimary><span className="flex items-center gap-3"><IoVideocamSharp/>Join Class</span></BtnPrimary>
                </div>
            </div>

        </div>
    )
}

export default ClassDetails