import React from 'react'
import MovingText from 'react-moving-text'
import {Link} from 'react-router-dom'

const Landing = () => {
  return (
    <div className='overflow-auto scrollbar-hide'>
      <MovingText
        type="fadeInFromTop"
        duration="3000ms"
        delay="0s"
        direction="normal"
        timing="ease"
        iteration="1"
        fillMode="none">
        <h1 className='text-white text-6xl font-mono text-center pt-5'>Razzvie</h1>
        <Link to='/login'>
        <h1 className='text-white text-xl font-mono text-end pt-2 mr-5'>Login/Signup</h1>
        </Link>
      <h2 className='text-white text-lg font-mono text-center pt-5 mt-5'>Featured</h2>
      </MovingText>
      <MovingText
        type="fadeInFromBottom"
        duration="3000ms"
        delay="0s"
        direction="normal"
        timing="ease"
        iteration="1"
        fillMode="none">
      <div className="flex justify-evenly pl-3 mt-5">
        <div className="rounded-lg shadow-sm  max-w-lg">
            <img className="rounded-t-lg" src="https://www.classicdriver.com/sites/default/files/styles/article_full/public/article_images/marioklemm_testarossa_17.jpg" alt="" />
          <div className="p-6">
            <h5 className="text-white text-xl font-mono mb-2">1994 Ferrari Testarossa</h5>
            <p className="text-white text-base font-mono mb-4">
              This 1986 Ferrari Testarossa is a monospecchio example that is powered by a 4.9-liter flat-12 mated to a five-speed manual transaxle with a gated shifter, and it has been refinished in green over tan leather. 
              <hr/>
              $98,000
            </p>
          </div>
        </div>
        <div className="rounded-lg shadow-sm  max-w-lg">
            <img className="rounded-t-lg" src="https://image-cdn.hypb.st/https%3A%2F%2Fhypebeast.com%2Fimage%2F2022%2F07%2Fnissan-skyline-gt-r-r32-r33-jgtcc-gt1-rm-sothebys-auction-for-sale-7.jpg?q=90&w=1400&cbr=1&fit=max" alt="" />
          <div className="p-6">
            <h5 className="text-white text-xl font-mono mb-2">1989 R32</h5>
            <p className="text-white text-base font-mono mb-4">
              The GodZilla 
              the R32 from 1989. This was the first year this model variant was offered, making this rare example that bit more special — especially seeing it has just over 18,000 miles on the clock.
              <hr/>
              $87,000
            </p>
          </div>
        </div>
      </div>
      </MovingText>
    </div>

  )
}

export default Landing