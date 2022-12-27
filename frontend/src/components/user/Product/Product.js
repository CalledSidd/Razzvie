import React from 'react'

const Product = () => {
  return (
    <div className="flex justify-start mx-24 mt-5">
      <div className="rounded-lg shadow-sm  max-w-5xl">
        <img className="rounded-t-lg" src="https://www.classicdriver.com/sites/default/files/styles/article_full/public/article_images/marioklemm_testarossa_17.jpg" alt="" />
        <div className="p-6">
          <h5 className="text-white text-xl font-mono mb-2">1994 Ferrari Testarossa</h5>
          <p className="text-white text-base font-mono mb-4">
            This 1986 Ferrari Testarossa is a monospecchio example that is powered by a 4.9-liter flat-12 mated to a five-speed manual transaxle with a gated shifter, and it has been refinished in green over tan leather.
            <hr />
            $98,000
          </p>
        </div>
      </div>
    </div>
  )
}

export default Product