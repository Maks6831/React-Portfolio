import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
    return (

<footer class="bg-white shadow dark:bg-gray-900 m-4" style={{margin: '0px', bottom: "0px"}}>
    <div class="w-full container mx-auto p-4 md:px-6 md:py-8">
        <div class="sm:flex sm:items-center sm:justify-between">
            <a href="https://flowbite.com/" class=""/>
        
                <span class="self-center text-2xl font-semibold whitespace-nowrap dark:text-white flex items-center mb-4 sm:mb-0">Portfolio</span>
            <ul class="flex flex-wrap items-center mb-6 text-sm text-gray-500 sm:mb-0 dark:text-gray-400">
                <li>
                    <a href ="mailto: ma.khan6971@gmail.com"class="mr-4 hover:underline md:mr-6 ">Send Email</a>
                </li>
                <li>
                    <a href="#" class="mr-4 hover:underline md:mr-6">Linkedin</a>
                </li>
                <li>
                    <a href="https://github.com/Maks6831" class="mr-4 hover:underline md:mr-6 ">Github</a>
                </li>
                <li>
                    <Link to="/contact" class="hover:underline">Contact</Link>
                </li>
            </ul>
        </div>
        <hr class="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
        <span class="block text-sm text-gray-500 sm:text-center dark:text-gray-400">© 2023 <a href="https://flowbite.com/" class="hover:underline"> Muhammad Ali Khan</a>. All Rights Reserved.</span>
    </div>
</footer>



    )
}

export default Footer;