
const ClassTime = () => {
    return (
        <div> {/* table */}
            <div className="overflow-x-auto my-10">
                <table className="table table-zebra">
                    {/* head */}
                    <thead>
                        <tr className="text-xl text-center">

                            <th>Meeting Name</th>
                            <th>Meeting Time</th>

                        </tr>
                    </thead>
                    <tbody>
                        {/* row 1 */}
                        <tr>

                            <td>Video Editing Class(Tue,wed,Thu) </td>
                            <td>10:00 am</td>

                        </tr>
                        <tr>

                            <td>Digital Marketing Class(Only Friday) </td>
                            <td>10:00 am</td>

                        </tr>
                        <tr>

                            <td>Counselling Meeting </td>
                            <td>4:00 pm</td>

                        </tr>
                        <tr>

                            <td>Lead Generation Class </td>
                            <td>6:00 pm</td>

                        </tr>
                        <tr>

                            <td>Counselling Meeting </td>
                            <td>8:00 pm</td>

                        </tr>
                        <tr>

                            <td>All Member Meeting </td>
                            <td>8:00 pm</td>

                        </tr>
                        <tr>

                            <td>Photo Editing Class(Sat,Sun,Mon)</td>
                            <td>8:00 pm</td>

                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default ClassTime