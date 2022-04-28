import Image from 'next/image'
import Link from 'next/link'
import SVG from 'react-inlinesvg'

import Button from '../Button'
export default function HeaderSection() {
  return (
    <div id="home" className="bg-gray-250">
      <div className="container md:flex">
        <div className="md:col-6 pt-14 md:pt-20">
          <p className="py-4 text-center md:text-left md:py-4 text-orange-500">
            Një brengë më pak për ty.
          </p>
          <h1 className="text-center md:leading-tight md:text-left text-3xl md:text-5xl font-bold text-gray-800">
            Pastërtia e shtëpisë tuaj është kënaqësia jonë
            {/* <span className="text-gray-800 md:text-gray-950">Pastrimi i shtëpisë tënde</span> And
            <span className="text-gray-800 md:text-gray-950"> Disinfection </span> */}
            {/* <p>
              For Your <span className="text-gray-800 md:text-gray-950 "> Home </span>
            </p> */}
          </h1>
          <p className="py-8 text-center text-base md:text-left text-gray-600">
            Eikip me sy të trajnuar që mos ti ik asnjë detaj gjatë pastrimit të shtëpisë, zyrës tuaj
            apo çfarëdo hapsire që të keni nevojë.
          </p>
          <div className="flex items-center justify-center mb-8 space-x-4 md:mb-8 md:justify-start ">
            <div className="">
              <a
                rel="noopener noreferrer"
                aria-label="facebook"
                href="https://www.facebook.com/pastrimprogostivar"
              >
                <SVG
                  src="/svg/fb.svg"
                  className="w-12 h-12 p-2 transition-all text-gray-950 hover:text-gray-3 rounded-md cursor-pointer fill-current "
                  alt="facebook icon"
                />
              </a>
            </div>

            <div className="">
              <a
                rel="noopener noreferrer"
                aria-label="instagram"
                href="https://www.instagram.com/pastrimpro//"
              >
                <SVG
                  src="/svg/instagram.svg"
                  className="w-12 h-12 p-2 transition-all text-gray-950 hover:text-gray-3 rounded-md cursor-pointer fill-current "
                  alt="email icon"
                />
              </a>
            </div>
            <div className="">
              <a
                rel="noopener noreferrer"
                aria-label="email"
                href="emailto:pastrimprofesionalgostivar@gmail.com
                    "
              >
                <SVG
                  src="/svg/email.svg"
                  className="w-12 h-12 p-2 transition-all text-gray-950 hover:text-gray-3 rounded-md cursor-pointer fill-current "
                  alt="email icon"
                />
              </a>
            </div>
          </div>
          <div className="flex justify-center md:justify-start mt-4">
            <Link href="tel:00389 79 322 958" passHref className="" aria-label="Contact Button">
              <Button as="a" variant="primary">
                Na kontaktoni
              </Button>
            </Link>
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
          <div
            className="absolute hidden md:block md:left-16 md:top-[625px] "
            style={{ zIndex: '-10' }}
          >
            <SVG src="/svg/dots.svg" className="w-34 h-64 opacity-10 " alt="facebook icon" />
          </div>
        </div>
      </div>
    </div>
  )
}
