import Image from 'next/image'
import Link from 'next/link'
import SVG from 'react-inlinesvg'

import Button from '../Button'
export default function HeaderSection() {
  return (
    <div id="home" className="bg-gray-250">
      <div className="container md:flex">
        <div className="md:col-6 pt-14 md:pt-20">
          <p className="py-4 text-center md:text-left md:py-4 text-orange-500">We clean houses</p>
          <h1 className="text-center md:leading-tight md:text-left text-3xl md:text-6xl font-bold text-gray-800">
            Complete <span className="text-gray-800 md:text-gray-950">Cleaning</span> And
            <span className="text-gray-800 md:text-gray-950"> Disinfection </span>
            <p>
              For Your <span className="text-gray-800 md:text-gray-950 "> Home </span>{' '}
            </p>
          </h1>
          <p className="py-8 text-center text-base md:text-left text-gray-500">
            Professional housecleaning services, you want to make sure that you find a team that can
            accommodate your schedule, and cleaning preferences.
          </p>
          <div className="flex justify-center md:justify-start mt-4">
            <Link href="#contact" passHref className="" aria-label="Contact Button">
              <Button as="a" variant="primary">
                Contact us
              </Button>
            </Link>
          </div>

          <div className="flex justify-center md:justify-start ">
            <a rel="noopener noreferrer" aria-label="phone" href="tel:00389 79 322 958">
              <div className="flex justify items-center space-x-4 mt-10">
                <SVG
                  src="/svg/call.svg"
                  className="bg-gray-950 w-10 h-10 p-2  text-white rounded-full"
                  alt="phone icon"
                />

                <p className="text-gray-500"> +389 79 322 958</p>
              </div>
            </a>
          </div>
        </div>
        <div className="md:col-6 flex justify-end relative pt-12 md:pt-0" style={{ zIndex: '4' }}>
          <Image
            // loader={myLoader}
            priority
            src="/images/heropic.jpg"
            layout="intrinsic"
            alt="Header"
            objectFit="cover"
            quality={100}
            width={460}
            height={710}
          />

          <div className="absolute left-2 md:left-[168px] top-0 " style={{ zIndex: '2' }}>
            <SVG
              src="/svg/checkicon.svg"
              className="w-12 h-screen rounded-md "
              alt="facebook icon"
            />
          </div>
          <div className="absolute -top-64 md:left-14 md:top-[390px] " style={{ zIndex: '-1' }}>
            <SVG
              src="/svg/dots.svg"
              className="w-34 h-screen opacity-10 rounded-md "
              alt="facebook icon"
            />
          </div>
        </div>
      </div>
    </div>
  )
}
