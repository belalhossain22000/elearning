import { useContext } from "react"
import { DataContext } from "../../provider/ContextProvider/ContextProvider"

const Table = () => {
    const { user } = useContext(DataContext)
    const { country, phoneNumber, whatsAppNumber, language, email, firstName, lastName } = user || {}
    console.log(user)
    return (
        <div className="mt-4 flex items-center justify-center">
            <div className="overflow-x-auto">
                <table className="table table-zebra">
                    <tbody>
                        {/* row 1 */}
                        <tr>

                            <td className=" text-base">Profile Type</td>
                            <td className=" text-base">Student</td>

                        </tr>
                        <tr>

                            <td className=" text-base">Name</td>
                            <td className=" text-base">{`${firstName} ${lastName}`}</td>

                        </tr>
                        {/* row 2 */}
                        <tr>

                            <td className=" text-base">Phone</td>
                            <td className=" text-base">{phoneNumber}</td>

                        </tr>
                        {/* row 3 */}
                        <tr>

                            <td className=" text-base">Date of Birth</td>
                            <td className=" text-base"></td>

                        </tr>
                        <tr>

                            <td className=" text-base">Gender</td>
                            <td className=" text-base"></td>

                        </tr>
                        <tr>

                            <td className=" text-base">Country</td>
                            <td className=" text-base">{country}</td>

                        </tr>
                        <tr>

                            <td className=" text-base">Division</td>
                            <td className=" text-base"></td>

                        </tr>
                        <tr>

                            <td className=" text-base">City</td>
                            <td className=" text-base"></td>

                        </tr>
                        <tr>

                            <td className=" text-base">Language</td>
                            <td className=" text-base">{language}</td>

                        </tr>
                        <tr>

                            <td className=" text-base">Email</td>
                            <td className=" text-base">{email}</td>

                        </tr>
                        <tr>

                            <td className=" text-base">Facebook</td>
                            <td className=" text-base"></td>

                        </tr>
                        <tr>

                            <td className=" text-base">Course Fee</td>
                            <td className=" text-base"></td>

                        </tr>
                        <tr>

                            <td className=" text-base">WhatsApp</td>
                            <td className=" text-base">{whatsAppNumber}</td>

                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default Table