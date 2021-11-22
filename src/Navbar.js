import React from 'react'
// import logo from '../public/1200px-Deno.svg.png'

export default function Navbar() {
  return (
    <div className='Navbar'>
      <span className='AppName'>NOVAS</span>
      <div>
        <a href="https://github.com/NOVASland/NOVAS" target="_blank"><img className='navbar-githublogo' src="/images/githublogo.png" alt='deno'/>      </a>
        <a href="https://deno.land/x/novas" target="_blank"><img className='navbar-denologo' src="/images/denologo.png" alt='deno'/></a>      
      </div>
    </div>
  )
}
