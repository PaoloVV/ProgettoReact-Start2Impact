import React from "react";
import { Link } from "react-router-dom";

function ErrorPage(){
    return (
        <>
            <div className="text-center mt-10">
                <h2 className="text-2xl font-bold text-white">Page not found...</h2>
                <p className="text-white font-bold mt-7">
                    Sorry but this page could not be found. <br />
                    Go back or click below to return to the Homepage.
                    Thanks
                </p>
                <Link to={"/"} className="text-white text-xl font-bold mt-7"> --{">"} HOMEPAGE {"<"}-- </Link>
            </div>
        </>
    )
}

export default ErrorPage