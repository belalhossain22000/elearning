

import { Link, useRouteError } from "react-router-dom";



const Error = () => {
    const error = useRouteError();
    console.error(error);
    return (
        <div id="error-page" className="h-[100vh] flex items-center justify-center flex-col gap-10">
            <h1 className="font-bold text-3xl">Oops!</h1>
            <p className="font-semibold text-xl">Sorry, an unexpected error has occurred.</p>
            <p>
                <i>{error.statusText || error.message}</i>
            </p>

            <Link to="/" className="btn btn-primary"> Back to Home</Link>


        </div >
    )
}

export default Error