import AgentDetails from "../../components/AgentDetails/AgentDetails"
import ClassTime from "../../components/ClassTime/ClassTime"
import ClassCard from "./ClassCard"

const Home = () => {
    return (
        <div className="container mx-auto ">
            {/* classes && details*/}
            <div className="flex items-center justify-center gap-5">
                <ClassCard />

            </div>

            {/* class tie and table */}
            <div className="flex items-center justify-center flex-col my-10 ">
                <div>
                    <h2 className="text-3xl text-center font-bold">Meeting time and table</h2>
                    <ClassTime />
                </div>
            </div>

            <div className="flex items-center justify-center flex-col">
                <h2 className="text-3xl font-bold text-center pb-5">Agent Details</h2>
                <div>
                    <AgentDetails />
                </div>
            </div>

        </div>
    )
}

export default Home