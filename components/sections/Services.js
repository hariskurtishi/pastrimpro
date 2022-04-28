// import Link from 'next/link'
import SVG from 'react-inlinesvg'
export default function Services() {
  return (
    <div id="services" className="container mt-24 ">
      <p className="py-4 text-center md:text-left md:py-4 text-orange-500">Best services</p>
      <h2 className="text-center md:leading-tight md:text-left text-3xl md:text-4xl font-bold text-gray-800  ">
        Our Services
      </h2>
      <div className="flex justify-center md:justify-start">
        <SVG src="/svg/line.svg" className="w-36 h-6 text-black rounded-md " alt="house icon" />
      </div>
      <p className="lg:col-5 md:col-6 py-8 text-center text-base md:text-left text-gray-600">
        While we can customize your cleaning plan to suit your needs, most clients schedule regular
        cleaning services:
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8  ">
        <div className=" px-6 border-2 rounded-lg py-8 space-x-4 text-gray-600 bg-white">
          <div>
            <div className="bg-gray-950 inline-flex justify-start p-2 rounded-lg mb-4">
              <SVG src="/svg/house.svg" className="w-12 h-12" alt="check icon" />
            </div>
            <div>
              <p className="text-xl font-semibold font-jost"> Recurring Cleaning</p>
              <p className="mt-4 text-base font-medium">
                We are taking care of cleaning surfaces on a regular basis so that they don&apos;t
                get overwhelmingly dirty.
              </p>
              {/* <Link href="#contact" aria-label="Contact">
                <a>
                  <button className="flex items-center mt-6 space-x-4 ">
                    <div className="text-gray-950 hover:border-b border-gray-950">Learn More.</div>
                    <SVG
                      src="/svg/arrow.svg"
                      className="text-white w-5 fill-current"
                      alt="button"
                    />
                  </button>
                </a>
              </Link> */}
            </div>
          </div>
        </div>
        <div className=" px-6 border-2 rounded-lg py-8 space-x-4 text-gray-600 bg-white">
          <div>
            <div className="bg-gray-950 inline-flex justify-start p-2 rounded-lg mb-4">
              <SVG src="/svg/house.svg" className="w-12 h-12" alt="check icon" />
            </div>
            <div>
              <p className="text-xl font-semibold font-jost">Occasional Cleaning</p>
              <p className="mt-4 text-base font-medium">
                Needs that do not necessarily mean you have a party planned or awaiting a special
                occasion, or expecting guests.
              </p>
              {/* <Link href="#contact" aria-label="Contact">
                <a>
                  <button className="flex items-center mt-6 space-x-4 ">
                    <div className="text-gray-950 hover:border-b border-gray-950">Learn More.</div>
                    <SVG
                      src="/svg/arrow.svg"
                      className="text-white w-5 fill-current"
                      alt="button"
                    />
                  </button>
                </a>
              </Link> */}
            </div>
          </div>
        </div>
        <div className=" px-6 border-2 rounded-lg py-8 space-x-4 text-gray-600 bg-white">
          <div>
            <div className="bg-gray-950 inline-flex justify-start p-2 rounded-lg mb-4">
              <SVG src="/svg/house.svg" className="w-12 h-12" alt="check icon" />
            </div>
            <div>
              <p className="text-xl font-semibold font-jost">Apartment Cleaning</p>
              <p className="mt-4 text-base font-medium">
                We are taking care of cleaning surfaces on a regular basis so that they don&apos;t
                get overwhelmingly dirty.
              </p>
              {/* <Link href="#contact" aria-label="Contact">
                <a>
                  <button className="flex items-center mt-6 space-x-4 ">
                    <div className="text-gray-950 hover:border-b border-gray-950">Learn More.</div>
                    <SVG
                      src="/svg/arrow.svg"
                      className="text-white w-5 fill-current"
                      alt="button"
                    />
                  </button>
                </a>
              </Link> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
