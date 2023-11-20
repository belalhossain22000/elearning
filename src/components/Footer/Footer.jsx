

const Footer = () => {
    return (
        <footer className="container mx-auto my-10 bg-slate-700 text-white py-5 px-3">

            < h1 className="text-3xl font-semibold text-center" > Owner Details</h1 >
            <div className="flex items-center justify-center gap-5">
                <img className="w-20 h-auto object-cover" src="/Logo.svg" alt="" />
                <h2 className="text-xl font-bold">Digital Earning Platform BD</h2>
            </div>
            <div className="text-center space-y-3">
                <h1 className="text-xl font-semibold">Owner</h1>
                <h1 className="font-semibold text-2xl">Ajijul Islam <span className="text-sm font-normal">(Lalmonirhat Govt Collage)</span></h1>
                <h2 className="font-semibold ">WhatsApp: 01313567558</h2>
                <h2 className="font-semibold ">ContactNo: 096114188480</h2>
                <h2 className="font-normal text-sm ">* DEP,Dhaka,Bangladesh</h2>
            </div>
            <div className="footer footer-center mt-5 p-2 bg-base-300 text-base-content">
                <aside>
                    <p>Copyright © 2023 - All right reserved by Digital Earning Platform BD</p>
                </aside>
            </div>
        </footer>
    )
}

export default Footer