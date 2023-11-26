import AgentDetails from "../../components/AgentDetails/AgentDetails"
import ClassTime from "../../components/ClassTime/ClassTime"
import ClassCard from "./ClassCard"

const Home = () => {

    return (
        <div className="container mx-auto flex items-center justify-center gap-10 flex-col ">
            {/* classes && details*/}
            <div>
                <h1 className="font-semibold text-4xl py-5 ">Our popular classes</h1>
            </div>
            <div className="flex items-center justify-center gap-5">
                <ClassCard />

            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-20">

                {/* class tie and table */}
                <div className="flex items-center justify-center flex-col p-3">
                    <div>
                        <h2 className="text-3xl text-center font-bold">Meeting time and table</h2>
                        <ClassTime />
                    </div>
                </div>
                {/* gent time details */}
                <div className="flex items-center justify-center flex-col">
                    <h2 className="text-3xl font-bold text-center pb-5">Agent Details</h2>
                    <div>
                        <AgentDetails />
                    </div>
                </div>
            </div>




        </div>
    )
}

export default Home