import React from "react";
import { NavLink } from "react-router-dom";

const Navbar  = () => {
    return (
    <nav className="bg-gray-800">
  <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8"/>
    <div className="relative flex md:h-16 items-center justify-between">
      <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
      </div>
      <div className="flex flex-1 items-center flex-row-reverse justify-end sm:items-stretch sm:justify-start">
        
        <div className="hidden sm:ml-6 sm:block">
          <div className="flex space-x-4">
            {/* Current: "bg-gray-900 text-white", Default: "text-gray-300 hover:bg-gray-700 hover:text-white" */}
            <NavLink
              to="/"
              end
              className={({ isActive }) =>
                isActive ? 'bg-gray-900 text-white rounded-md px-3 py-2 text-sm font-medium' : 'text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium'
              }
            >
              Home
            </NavLink>
            <NavLink
              to="/projects"
              className={({ isActive }) =>
                isActive ? 'bg-gray-900 text-white rounded-md px-3 py-2 text-sm font-medium' : 'text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium'
              }
            >
              Projects
            </NavLink>
            <NavLink
              to="/contact"
              className={({ isActive }) =>
                isActive ? 'bg-gray-900 text-white rounded-md px-3 py-2 text-sm font-medium' : 'text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium'
              }
            >
              Contact
            </NavLink>
          </div>
        </div>
      </div>
      
    </div>
  


  {/* Mobile menu */}
  <div className="sm:hidden" id="mobile-menu">
    <div className="space-y-1 px-2 pt-2 pb-3">
    <NavLink
              to="/"
              end
              className={({ isActive }) =>
                isActive ? "bg-gray-900 text-white block rounded-md px-3 py-2 text-base font-medium" : "text-gray-300 hover:bg-gray-700 hover:text-white block rounded-md px-3 py-2 text-base font-medium"
              }
            >
              Home
            </NavLink>
            <NavLink
              to="/projects"
              className={({ isActive }) =>
                isActive ? "bg-gray-900 text-white block rounded-md px-3 py-2 text-base font-medium" : "text-gray-300 hover:bg-gray-700 hover:text-white block rounded-md px-3 py-2 text-base font-medium"
              }
            >
              Projects
            </NavLink>
            <NavLink
              to="/contact"
              className={({ isActive }) =>
                isActive ? "bg-gray-900 text-white block rounded-md px-3 py-2 text-base font-medium" : "text-gray-300 hover:bg-gray-700 hover:text-white block rounded-md px-3 py-2 text-base font-medium"
              }
            >
              Contact
            </NavLink>

    </div>
  </div>
</nav>
)
}

export default Navbar;
