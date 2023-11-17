import ClassCard from "./ClassCard"

const Home = () => {
    return (
        <div className="container mx-auto">
            {/* classes && details*/}
            <div className="flex flex-wrap gap-5 items-center justify-center my-10">
                {
                    [1, 1, 1, 1, 1].map((item, index) => <ClassCard key={index} />)
                }

            </div>
            <div className="flex items-center justify-center flex-col ">
                <h2 className="text-3xl">Meeting time and table</h2>
                {/* table */}
                <div className="overflow-x-auto my-10">
                    <table className="table table-zebra">
                        {/* head */}
                        <thead>
                            <tr>
                                <th></th>
                                <th>Class Name</th>
                                <th>Time</th>
                            </tr>
                        </thead>
                        <tbody>
                            {/* row 1 */}
                            <tr>
                                <th>1</th>
                                <td>Cy Ganderton</td>
                                <td>Quality Control Specialist</td>
                                <td>Blue</td>
                            </tr>
                            {/* row 2 */}
                            <tr>
                                <th>2</th>
                                <td>Hart Hagerty</td>
                                <td>Desktop Support Technician</td>
                                <td>Purple</td>
                            </tr>
                            {/* row 3 */}
                            <tr>
                                <th>3</th>
                                <td>Brice Swyre</td>
                                <td>Tax Accountant</td>
                                <td>Red</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>

        </div>
    )
}

export default Home