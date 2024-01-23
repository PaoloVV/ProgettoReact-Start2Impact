import React from "react";
import Logo from "../../images/forchetta-veg.jpg"
import "./Navbar.css"
import { FaGithubAlt } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { HiMiniCodeBracketSquare } from "react-icons/hi2";
import { Link } from "react-router-dom";

function Navbar(){
    return (
        <>
            <div className="flex flex-row md:justify-between justify-start sm:items-center items-end">
                <div className="sm:w-3/4 w-1/3  max-sm:px-2 flex flex-col md:flex-row md:justify-evenly justify-start md:items-center items-start">
                    <img src={Logo} alt="Logo App" className="img-logo lg:w-16 w-14 lg:h-16 h-14 m-4" />
                    <div className="sm:w-3/4 w-full bg-black h-10 rounded-xl text-white flex justify-evenly items-center">
                        <ul className="w-full flex md:flex-row flex-col justify-evenly items-center h-10">
                            <li><Link to={"/"}>Home</Link></li>
                            <li className="uppercase font-bold max-sm:hidden">Only Vegetarian Recipes!!!</li>
                        </ul>
                    </div>
                </div>
                

                <div className="max-sm:mt-4 sm:mx-5 max-sm:px-2 sm:w-1/4 w-2/3">
                    <ul className="flex flex-row justify-evenly items-center bg-white rounded-xl border-2 h-10">
                        <li className="navbar-link my-1"><a href="https://github.com/PaoloVV" target="_blank" rel="noopener"><FaGithubAlt size={"2.5rem"} color="green"/></a></li>
                        <li className="navbar-link my-1"><a href="https://www.linkedin.com/in/paolo-viviani-aa1618278/" target="_blank" rel="noopener"><FaLinkedinIn size={"2rem"} color="green"/></a></li>
                        <li className="navbar-link my-1"><a href="https://paolovv.github.io/ProgettoHtmlCss-paoloViviani/" target="_blank" rel="noopener"><HiMiniCodeBracketSquare size={"2.5rem"} color="green"/></a></li>
                    </ul>
                </div>

            </div>
        </>
    )
}

export default Navbar;