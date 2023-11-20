import { agentData } from "../../data/data"

const AgentDetails = () => {
    return (
        <div className="overflow-x-auto shadow-lg">
            <table className="table">
                {/* head */}
                <thead>
                    <tr className="text-lg">

                        <th>Name</th>
                        <th>District</th>
                        <th>Work</th>
                    </tr>
                </thead>
                <tbody>
                    {/* row 1 */}
                    {
                        agentData.map((item, index) => (<tr key={index}>

                            <td>{item.name}</td>
                            <td>{item.district}</td>
                            <td>{item.work}</td>
                        </tr>))
                    }



                </tbody>
            </table>
        </div>
    )
}

export default AgentDetails