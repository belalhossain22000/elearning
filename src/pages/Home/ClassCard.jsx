import { classData } from "../../data/data"

const ClassCard = () => {
  return (
    <div className="overflow-x-auto">
      <table className="table">
        <tbody>
          {/* row 1 */}
          {
            classData?.map((item, index) => (<tr key={index}>
              <td >
                <div className="flex items-center justify-between gap-10 shadow-xl md:p-5 p-3 rounded-md">
                  <div className="avatar">
                    <div className="mask mask-squircle w-20 h-20 md:w-32 md:h-32">
                      <img className="object-cover" src={item?.image} />
                    </div>
                  </div>
                  <div>
                    <div className="font-bold text-xl md:text-3xl">{item?.className}</div>
                  </div>
                </div>
              </td>
            </tr>))
          }

        </tbody>
      </table>
    </div>
  )
}

export default ClassCard