import React from 'react';
import {ReactComponent as CalciferLogo} from "./logos/calcifer.svg"

function Nav() {
    return (
    <nav class="bg-white border-gray-200">
        <div class="max-w-screen-xl flex flex-wrap items-center justify-around mx-auto p-4">
            <div class="hidden w-full md:block md:w-auto" id="navbar-default">
            <ul class="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-white">
                <li>
                <a href="/recipes" class="block mt-7 mx-4 py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0">Recipes</a>
                </li>
                <li>
                <a href="/recipes" class="block mt-7 mx-4 py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0">Ingredients</a>
                </li>
                <li>
                    <a href="/" class="flex items-center pl-10 pr-10 mx-4">
                    <CalciferLogo/>
                    <span class="self-center text-2xl font-semibold whitespace-nowrap">Calcifer</span>
                    </a>
                </li>
                <li>
                <a href="#" class="block mt-7 mx-4 py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0">About</a>
                </li>
                <li>
                <a href="#" class="block mt-7 mx-4 py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0">Contact</a>
                </li>
            </ul>

            </div>
        </div>
    </nav>

    )
};

export default Nav;
