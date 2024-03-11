
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
        </div>
    )
}

export default Home