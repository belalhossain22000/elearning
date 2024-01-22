import { classData } from "../../data/data"
import ClassCard from "./ClassCard"

const Classes = () => {
    return (
        <div className="grid md:grid-cols-3 gap-5 container mx-auto px-3 md:my-10 my-5">

            {
                classData.map(singleClass => <ClassCard key={singleClass._id} singleClass={singleClass} />)
            }
        </div>
    )
}

export default Classes