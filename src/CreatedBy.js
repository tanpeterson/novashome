import React from 'react'

export default function CreatedBy() {
  return (
    <div className='CreatedByContainer'>
      <h1 className='CreatedByTitle'>Created By</h1>
      <div className="createdBy">
          <div className="createdBy-box-person">
            <img className='ProfilePicture' src="/images/red.png" alt=""/>
            <div className='CreateByNameLink'>
              <h2>Christie Herring</h2>
              <div className='CreateByLinkNameLink'>
                <a href="https://github.com/clherring" target="_blank"><img className='createdBy-githublogo' src="/images/githublogo.png" alt='deno'/></a>
                <a href="https://www.linkedin.com/in/christie-herring-3b1044ba/" target="_blank"><img className='createdBy-githublogo' src="/images/linkedin.png" alt='deno'/></a>
              </div>
            </div>
          </div>
          <div className="createdBy-box-person">
            <img className='ProfilePicture' src="/images/scope.png" alt=""/>
            <div className='CreateByNameLink'>
              <h2>Garrett Hickman</h2>
              <div>
                <a href="https://github.com/grhhhh" target="_blank"><img className='createdBy-githublogo' src="/images/githublogo.png" alt='deno'/></a>
                <a href="https://www.linkedin.com/in/garrettrhickman/" target="_blank"><img className='createdBy-githublogo' src="/images/linkedin.png" alt='deno'/></a>
              </div>
            </div>
          </div>
          <div className="createdBy-box-person">
            <img className='ProfilePicture' src="/images/moon.png" alt=""/>
            <div className='CreateByNameLink'>
              <h2>Sylvia Liu</h2>
              <div className='CreateByLinkNameLink'>
                <a href="https://github.com/liusylvia" target="_blank"><img className='createdBy-githublogo' src="/images/githublogo.png" alt='deno'/></a>
                <a href="https://www.linkedin.com/in/liusylvia949/" target="_blank"><img className='createdBy-githublogo' src="/images/linkedin.png" alt='deno'/></a>
              </div>
            </div>
          </div>
          <div className="createdBy-box-person">
            <img className='ProfilePicture' src="/images/star.png" alt=""/>
            <div className='CreateByNameLink'>
              <h2>Tanner Peterson</h2>
                <div className='CreateByLinkNameLink'>
                  <a href="https://github.com/tanpeterson" target="_blank"><img className='createdBy-githublogo' src="/images/githublogo.png" alt='deno'/></a>
                  <a href="https://www.linkedin.com/in/tanner-peterson/" target="_blank"><img className='createdBy-githublogo' src="/images/linkedin.png" alt='deno'/></a>
                </div>
            </div>
        </div>
      </div>
    </div>
  )
}
