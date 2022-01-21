import React from 'react'

export default function About() {
  return (
    <div className='AboutContainer'>
        <div className='AboutSvelteDeno'>
          <h3>Svelte and Deno</h3>
          <div className='AboutSvelteDenoText'>
            <p>
              Svelte is an incredibly performant web framework. Deno is a secure runtime with built-in TypeScript support.
              Yet neither of these powerful technologies have out-of-the-box support with one another.
            </p>
            <img className='AboutSvelteLogo' src="/images/svelte.png" alt='Svelte logo'/>
          </div>
        </div>

        <div className='AboutNovas'>
          <h3>Our solution</h3>
          <div className='AboutNovasText'>
            <p>
              Accelerate Svelte and Deno web application creation with NOVAS. Quickly compilie and visualize your application with a responsive live reload
              right on your browser without the headache of initial file configuration setup, dependency bloat, and boilerplating.
            </p>
            <img className='AboutDenoLogo' src="/images/denologo.png" alt='deno logo'/>
          </div>
        </div>
    </div>
  )
}
