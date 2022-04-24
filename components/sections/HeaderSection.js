import Image from 'next/image'
import Link from 'next/link'
import SVG from 'react-inlinesvg'

import Button from '../Button'
export default function HeaderSection() {
  return (
    <div className="bg-gray-250">
      <div className="container md:flex">
        <div className="md:col-6 pt-14 md:pt-20">
          <p className="py-4 text-center md:text-left md:py-4 text-orange-500">We clean houses</p>
          <h1 className="text-center md:leading-tight md:text-left text-3xl md:text-6xl font-bold text-gray-800">
            Complete <span className="text-gray-800 md:text-blue-300">Cleaning</span> And
            <span className="text-gray-800 md:text-blue-300"> Disinfection </span>
            <p>
              For Your <span className="text-gray-800 md:text-blue-300 "> Home </span>{' '}
            </p>
          </h1>
          <p className="py-8 text-center text-base md:text-left text-gray-500">
            Professional housecleaning services, you want to make sure that you find a team that can
            accommodate your schedule, and cleaning preferences.
          </p>
          <Link href="#contact" passHref className="" aria-label="Contact Button">
            <Button as="a" variant="primary">
              Contact us
            </Button>
          </Link>
        </div>
        <div className="md:col-6 flex justify-end relative">
          <div className="">
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
          </div>
          <div className="absolute md:left-[168`px] top-0 " style={{ zIndex: '2' }}>
            <SVG
              src="/svg/checkicon.svg"
              className="w-12 h-screen rounded-md "
              alt="facebook icon"
            />
          </div>
        </div>
      </div>
    </div>
  )
}
