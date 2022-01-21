import React from 'react';

export default function CreatorCard({name, github, linkedin, pic}) {
  return (
    <div className="CreatorCardContainer">
      <img className='ProfilePicture' src={pic} alt="NOVAS creators"/>
      <div className='CreatorCard'>
        <h2>{name}</h2>
        <div className='CreatorSocial'>
          <a href={github} target="_blank" rel="noreferrer"><img className='createdBy-githublogo' src="/images/githublogo.png" alt='deno'/></a>
          <a href={linkedin} target="_blank" rel="noreferrer"><img className='createdBy-githublogo' src="/images/linkedin.png" alt='deno'/></a>
        </div>
      </div>
    </div>
  );
}


/*
<div className="CreatorCardContainer">
  <img className='ProfilePicture' src="/images/red.png" alt=""/>
  <div className='CreatorCard'>
    <h2>Christie Herring</h2>
    <div className='CreatorSocial'>
      <a href="https://github.com/clherring" target="_blank" rel="noreferrer"><img className='createdBy-githublogo' src="/images/githublogo.png" alt='deno'/></a>
      <a href="https://www.linkedin.com/in/christie-herring-3b1044ba/" target="_blank" rel="noreferrer"><img className='createdBy-githublogo' src="/images/linkedin.png" alt='deno'/></a>
    </div>
  </div>
</div>

*/