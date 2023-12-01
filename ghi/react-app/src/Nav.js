import React from 'react';
import "./Nav.css";
import {ReactComponent as CalciferLogo} from "./logos/calcifer.svg"

function Nav() {
    return (
    <div>
        <nav>
            <div className="max-w-screen-xl flex flex-wrap items-center justify-around mx-auto p-4">
                <div className="hidden w-full md:block md:w-auto" id="navbar-default">
                <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border rounded-lg md:flex-row md:space-x-8 md:mt-0 md:border-0">
                    <li>
                    <a href="/recipes" className="block mt-7 mx-4 py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0">Recipes</a>
                    </li>
                    <li>
                    <a href="/recipes" className="block mt-7 mx-4 py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0">Ingredients</a>
                    </li>
                    <li>
                        <a href="/" className="flex items-center pl-10 pr-10 mx-4">
                        <CalciferLogo/>
                        <span className="self-center text-2xl font-semibold whitespace-nowrap">Calcifer</span>
                        </a>
                    </li>
                    <li>
                    <a href="#" className="block mt-7 mx-4 py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0">About</a>
                    </li>
                    <li>
                    <a href="#" className="block mt-7 mx-4 py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0">Contact</a>
                    </li>
                </ul>
                </div>
            </div>
        </nav>
        <div className="header">
            sign up banner here with button
        </div>
    </div>


    )
};

export default Nav;
