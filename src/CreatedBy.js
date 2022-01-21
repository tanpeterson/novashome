import React from 'react'
import CreatorCard from './components/CreatorCard';

export default function CreatedBy() {
  // name, github, linkedin, picture
  const names = ['Christie Herring', 'Garrett Hickman', 'Sylvia Liu', 'Tanner Peterson']
  const githubs = ['https://github.com/clherring', 'https://github.com/grhhhh', 'https://github.com/liusylvia', 'https://github.com/tanpeterson']
  const linkedins = ['https://www.linkedin.com/in/christie-herring-3b1044ba/', 'https://www.linkedin.com/in/garrettrhickman/', 'https://www.linkedin.com/in/liusylvia949/', 'https://www.linkedin.com/in/tanner-peterson/']
  const pic = ['/images/red.png', '/images/scope.png', '/images/moon.png', '/images/star.png'];
  const creatorProfiles = [];
  for(let i = 0; i < names.length; i++){
    creatorProfiles.push(<CreatorCard name={names[i]} github={githubs[i]} linkedin={linkedins[i]} pic={pic[i]} />)
  }
  return (
    <div className='CreatedByContainer'>
      <h1 className='CreatedByTitle'>Created By</h1>
      <div className='createdBy'>
        {creatorProfiles}
      </div>
    </div>
  )
}
