
const Table = () => {
    return (
        <div className="mt-4 flex items-center justify-center">
            <div className="overflow-x-auto">
                <table className="table table-zebra">
                    <tbody>
                        {/* row 1 */}
                        <tr>

                            <td className=" text-base">Cy Ganderton</td>
                            <td className=" text-base">Quality Control Specialist</td>

                        </tr>
                        {/* row 2 */}
                        <tr>

                            <td className=" text-base">Hart Hagerty</td>
                            <td className=" text-base">Desktop Support Technician</td>

                        </tr>
                        {/* row 3 */}
                        <tr>

                            <td className=" text-base">Brice Swyre</td>
                            <td className=" text-base">Tax Accountant</td>

                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default Table