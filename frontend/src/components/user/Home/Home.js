import React from 'react'
import { Link } from 'react-router-dom'

const HomePage = () => {
  return (
    <>
      <div className='grid grid-cols-3 mx-24 content-center px-20 pt-12 text-base max-w-[1800px] w-full'>
        <div className="rounded-lg shadow-sm  max-w-xs">
          <Link to='/product'>
            <img className="rounded-t-lg" src="https://media.carsandbids.com/cdn-cgi/image/width=2080,quality=70/c51905b0000b639a185eeb080dd879bf007f5604/photos/audi-tt-94.MuI1JyPaY.jpeg?t=159921224200" alt="" />
            <div className="p-6">
              <h5 className="text-white text-xl font-mono mb-2">2000 Audi TT</h5>
              <p className="text-white text-base font-mono mb-4">
                <hr />
                $8,000
              </p>
            </div>
          </Link>
        </div>
        <div className="rounded-lg shadow-sm  max-w-xs">
          <Link to='/product'>
            <img className="rounded-t-lg" src="https://media.carsandbids.com/cdn-cgi/image/width=542,quality=70/171ab1e538119e13fa98382f268326fc825fdc20/photos/9XY416Q7-wGN-eZyRIl-(edit).jpg?t=167037932384" alt="" />
            <div className="p-6">
              <h5 className="text-white text-xl font-mono mb-2">2021 Tesla Model S</h5>
              <p className="text-white text-base font-mono mb-4">
                <hr />
                $70,000
              </p>
            </div>
          </Link>
        </div>
        <div className="rounded-lg shadow-sm  max-w-xs">
          <Link to='/product'>
            <img className="rounded-t-lg" src="https://media.carsandbids.com/cdn-cgi/image/width=1800,quality=70/7a0a3c6148108c9c64425dd85e0181fa3cccb652/photos/3LNLgGqV-eMobuiMf-G-(edit).jpg?t=167148817180" alt="" />
            <div className="p-6">
              <h5 className="text-white text-xl font-mono mb-2">2006 Lotus Elise</h5>
              <p className="text-white text-base font-mono mb-4">
                <hr />
                $27,000
              </p>
            </div>
          </Link>
        </div>
      </div>
    </>
  )
}

export default HomePage