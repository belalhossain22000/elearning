
import AgentDetails from "../../components/AgentDetails/AgentDetails"
import ClassTime from "../../components/ClassTime/ClassTime"
import Banner from "./Banner"
import Classes from "./Classes"

const Home = () => {

    return (
        <div className=" fle items-center justify-center gap-10 flex-col ">
           {/* banner */}
           <Banner/>

            {/* classes && details*/}
            <div className="flex items-center justify-center flex-col ">
                <h1 className="font-semibold text-3xl md:text-5xl py-5 text-center text-gray-600">All <span className="text-green-600">Courses</span> of Digital Earning <span className="text-green-600">PlatformBd</span></h1>
                <img src="shape-11.webp" alt="" />
            </div>
            <div className="flex items-center justify-center gap-5">
              <Classes/>
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