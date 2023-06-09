import React from "react";
import { Link } from "react-router-dom";
import '../index.css';

const Home = () => {
    return (
        <div className="bg-white">

  <div className="relative isolate px-6 pt-14 lg:px-8">
    <div className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80" style={{top: '0px'}}>
      <svg className="relative left-[calc(50%-11rem)] -z-10 h-[21.1875rem] max-w-none -translate-x-1/2 rotate-[30deg] sm:left-[calc(50%-30rem)] sm:h-[42.375rem]" viewBox="0 0 1155 678">
        <path fill="url(#45de2b6b-92d5-4d68-a6a0-9b9b2abad533)" fill-opacity=".3" d="M317.219 518.975L203.852 678 0 438.341l317.219 80.634 204.172-286.402c1.307 132.337 45.083 346.658 209.733 145.248C936.936 126.058 882.053-94.234 1031.02 41.331c119.18 108.451 130.68 295.337 121.53 375.223L855 299l21.173 362.054-558.954-142.079z" />
        <defs>
          <linearGradient id="45de2b6b-92d5-4d68-a6a0-9b9b2abad533" x1="1155.49" x2="-78.208" y1=".177" y2="474.645" gradientUnits="userSpaceOnUse">
            <stop stop-color="#9089FC" />
            <stop offset="1" stop-color="#FF80B5" />
          </linearGradient>
        </defs>
      </svg>
    </div>
    <div className="mx-auto max-w-2xl py-32 sm:py-48 lg:py-56" style={{paddingTop: '6px'}}>
        
      <div className="text-center content-center">
        <div className="content-center flex justify-center">
        <img src={process.env.PUBLIC_URL + "/images/profile-pic.jpeg"} style={{borderRadius: "50%"}}/>
        </div>
        <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl" style={{padding: "15px"}}>Hello, <br></br> I am Ali</h1>
        <p className="mt-6 text-lg leading-8 text-gray-600">I am a freelance Front-end Web Developer based in London. Take a look at my portfolio by clicking Project Showcase.</p>
        <div className="mt-10 flex items-center justify-center gap-x-6">
          <Link to='/contact' className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Contact me</Link>
          <Link to='/projects' className="text-sm font-semibold leading-6 text-gray-900">Project Showcase<span aria-hidden="true">→</span></Link>
        </div>
      </div>
    </div>
    <div className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]" style={{bottom: "5px"}}>
      <svg className="relative left-[calc(50%+3rem)] h-[21.1875rem] max-w-none -translate-x-1/2 " viewBox="0 0 1155 678" style={{bottom: "30px"}}>
        <path fill="url(#ecb5b0c9-546c-4772-8c71-4d3f06d544bc)" fill-opacity=".3" d="M317.219 518.975L203.852 678 0 438.341l317.219 80.634 204.172-286.402c1.307 132.337 45.083 346.658 209.733 145.248C936.936 126.058 882.053-94.234 1031.02 41.331c119.18 108.451 130.68 295.337 121.53 375.223L855 299l21.173 362.054-558.954-142.079z" />
        <defs>
          <linearGradient id="ecb5b0c9-546c-4772-8c71-4d3f06d544bc" x1="1155.49" x2="-78.208" y1=".177" y2="474.645" gradientUnits="userSpaceOnUse">
            <stop stop-color="#9089FC" />
            <stop offset="1" stop-color="#FF80B5" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  </div>
</div>

    )
}

export default Home;
