import Image from 'next/image'
// import Link from 'next/link'
import SVG from 'react-inlinesvg'

// import Button from '../Button'
export default function About() {
  return (
    <div id="about" className="container pt-24">
      <div className=" md:flex py-0 md:py-24">
        <div className="md:col-6 flex relative  md:pt-0" style={{ zIndex: '4' }}>
          <Image
            // loader={myLoader}
            priority
            src="/images/7.jpg"
            layout="intrinsic"
            alt="Header"
            objectFit="cover"
            className="rounded-tl-[200px] md:rounded-tl-[290px]"
            quality={100}
            width={530}
            height={410}
          />

          <div className="absolute left-2 md:left-[168px] top-0 " style={{ zIndex: '2' }}></div>
          <div className="absolute -top-6 md:-top-0" style={{ zIndex: '2' }}>
            <SVG src="/svg/corner.svg" className="w-14 md:w-full" alt="facebook icon" />
          </div>
        </div>
        <div className="md:col-6 pt-14 md:pt-0 grid content-center">
          {/* <p className="py-4 text-left md:py-4 text-orange-500">
            GET YOUR PLACE CLEANED. IT’S SIMPLE
          </p> */}
          <h1 className="lg:col-7 md:leading-tight text-left text-3xl md:text-4xl font-bold text-gray-800">
            Jepi freski shtëpisë tënde
          </h1>
          <div className="flex justify-start ">
            <SVG src="/svg/line.svg" className="w-36 h-6 text-black rounded-md " alt="house icon" />
          </div>
          <p className="lg:col-11 py-8 text-base md:text-left text-gray-600">
            Ne e bëjmë më të lehtë përvojën e pastrimit për ju, qëllimi ynë është ta bëjmë pastrimin
            përsëri të këndshëm dhe t&apos;ju kthejmë kohën tuaj të lirë në mënyrë që të mund të
            përqendroheni në atë që është e rëndësishme.
          </p>
          {/* <div className="flex justify-start mt-4">
            <Link href="#contact" passHref className="" aria-label="Contact Button">
              <Button as="a" variant="primary">
                Learn More
              </Button>
            </Link>
          </div> */}
        </div>
      </div>
      <div className="md:flex py-0 md:py-24">
        <div className="md:col-6 pt-14 md:pt-0 grid content-center">
          {/* <p className="py-4 text-left md:py-4 text-orange-500">
            LET US SHOW YOU THE MAGIC WE CAN DO
          </p> */}
          <h1 className="lg:col-8 md:leading-tight text-left text-3xl md:text-4xl font-bold text-gray-800">
            Rezervimi i një shërbimi pastrimi
          </h1>
          <div className="flex justify-start">
            <SVG src="/svg/line.svg" className="w-36 h-6 text-black rounded-md " alt="house icon" />
          </div>
          <p className="py-8 lg:col-11 text-base text-left text-gray-600">
            Rezervimi i një shërbimi pastrimi nuk ka qenë kurrë më i lehtë, ne e kuptojmë se
            pastrimi është punë e vështirë dhe një punë për të cilën askush nuk dëshiron të gjejë
            kohë, kjo është arsyeja pse ne kemi zhvilluar shërbimet tona për t&apos;ju ndihmuar të
            kurseni kohë.
          </p>
          {/* <div className="flex justify-start mt-4">
            <Link href="#contact" passHref className="" aria-label="Contact Button">
              <Button as="a" variant="primary">
                Learn More
              </Button>
            </Link>
          </div> */}
        </div>
        <div
          className="md:col-6 flex justify-end relative md:pt-0 mt-16 md:mt-0"
          style={{ zIndex: '4' }}
        >
          <Image
            // loader={myLoader}
            priority
            src="/images/8.jpg"
            layout="intrinsic"
            alt="Header"
            objectFit="cover"
            className="rounded-tr-[200px] md:rounded-tr-[290px]"
            quality={100}
            width={530}
            height={410}
          />

          <div className="absolute left-2 md:left-[168px] top-0 " style={{ zIndex: '2' }}></div>
          <div className="absolute -top-6 md:-top-0 " style={{ zIndex: '2' }}>
            <SVG src="/svg/corner2.svg" className="w-14 md:w-full  " alt="facebook icon" />
          </div>
        </div>
      </div>
    </div>
  )
}
