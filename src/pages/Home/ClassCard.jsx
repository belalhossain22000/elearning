import { Link } from "react-router-dom"
import { MdAccessTimeFilled } from "react-icons/md"
import { IoVideocamSharp } from "react-icons/io5"

const ClassCard = ({ singleClass }) => {

  const {
    _id,
    image,
    className,
    duration,
    lectures,
  } = singleClass || {}
  return (
    <Link to={`course-details/${_id}`} className="p-8 shadow-2xl border-green-200 border hover:border-2 hover:scale-105 transition duration-500 hover:border-green-500  rounded-lg cursor-pointer">
      <div >
        <img className="rounded-lg w-full object-cover " src={image} alt="" />
      </div>
      <div className="mt-5 space-y-3">
        <p className="font-semibold text-2xl text-gray-700">{className}</p>
        <div className="flex items-center justify-between ">
          <p className="font-semibold text-xl flex items-center gap-3"> <MdAccessTimeFilled color="green" /> <span>{duration}</span></p>
          <p className="font-semibold text-xl flex items-center gap-2"><IoVideocamSharp color="green" /><span>{lectures} Lectures</span></p>
        </div>
      </div>
    </Link>
  )
}

export default ClassCard