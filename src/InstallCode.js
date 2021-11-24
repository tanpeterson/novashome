import React from 'react'

export default function InstallCode() {
  return (
    <div className='InstallDiv'>
       <div className='InstallContainer'>
          <h3> How to install NOVAS </h3>
          <div className='AboutCode'>
            <p>deno install --allow-net --allow-read --allow-write --unstable https://deno.land/x/novas/cli.ts</p>
          </div>
      </div>
      <div className='InstallContainer'>
          <h3> To Create A Project </h3>
          <div className='AboutCode'>
            <p>novas create [project name]</p>
            <p>cd [project name]</p>
          </div>
      </div>
      <div className='InstallContainer'>
          <h3> To Build Your Project</h3>
          <div className='AboutCode'>
            <p>novas build</p>
          </div>
      </div>
      <div className='InstallContainer'>
          <h3> To Start Developing </h3>
          <div className='AboutCode'>
            <p>novas dev</p>
          </div>
      </div>
    </div>
  )
}
