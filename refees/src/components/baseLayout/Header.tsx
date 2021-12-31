import React from 'react'
import { Link } from "gatsby"

import logo from "../../images/logo_text.png"

const Header2 = () => (
    <div className="flex flex-col justify-between px-6 py-8 space-y-8 md:space-y-0 md:flex-row md:px-10 md:py-10">
    <div className="flex flex-row items-center justify-between">
      <Link to="/">
        <img
          src={logo}
          alt="logo"
          className="h-8 transition duration-300 transform hover:scale-105"
        />
      </Link>
      <a
        href="https://app.apwine.fi"
        target="_blank"
        rel="noopener referrer"
        className="px-4 py-2 text-sm text-white transition duration-300 border-2 border-primary-200 rounded-xl md:hidden hover:text-white hover:bg-primary-200"
      >
        Launch App
      </a>
    </div>
    <div className="flex flex-row items-center justify-around text-sm sm:space-x-12 sm:mx-auto md:mx-0">
      <Link
        to="/"
        className="text-white transition duration-300 hover:text-primary-200"
      >
        About
      </Link>
      <a
        href="https://gov.apwine.fi"
        target="_blank"
        rel="noopener referrer"
        className="text-white transition duration-300 hover:text-primary-200"
      >
        Forum
      </a>
      {/* <Link href="/blog" className="text-white">Blog</a> */}
      <Link
        to="/faq"
        className="text-white transition duration-300 hover:text-primary-200"
      >
        FAQ
      </Link>
      <a
        href="https://docs.apwine.fi"
        target="_blank"
        rel="noopener referrer"
        className="text-white transition duration-300 hover:text-primary-200"
      >
        Documentation
      </a>
      <a
        href="https://angel.co/company/apwine/jobs"
        target="_blank"
        rel="noopener referrer"
        className="text-white transition duration-300 hover:text-primary-200"
      >
        Careers
      </a>
      <a
        href="https://app.apwine.fi"
        target="_blank"
        rel="noopener referrer"
        className="hidden px-4 py-2 text-white transition duration-300 border-2 border-primary-200 rounded-xl md:block hover:text-white hover:bg-primary-200"
      >
        Launch App
      </a>
    </div>
  </div>
)

const Header = () => (

<div className="navbar mb-2 shadow-lg bg-neutral text-neutral-content rounded-box">
  <div className="flex-1 px-2 mx-2">
    <span className="text-lg font-bold">
            ReFees
          </span>
  </div> 
  <div className="flex-none hidden px-2 mx-2 lg:flex">
    <div className="flex items-stretch">
      <a className="btn btn-ghost btn-sm rounded-btn">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-5 mr-2 stroke-current">              
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"></path>            
        </svg>
              About
            
      </a> 
      <a className="btn btn-ghost btn-sm rounded-btn">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-5 mr-2 stroke-current">     
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"></path>                     
        </svg>
              FAQ
            
      </a> 
      <a className="btn btn-ghost btn-sm rounded-btn">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-5 mr-2 stroke-current">          
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z"></path>                
        </svg>
              Documentation
            
      </a> 
      <a className="btn btn-primary btn-sm rounded-btn">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-5 mr-2 stroke-current">       
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"></path>                   
        </svg>
              Launch App
            
      </a>
    </div>
  </div> 
</div>
)

export default Header;

