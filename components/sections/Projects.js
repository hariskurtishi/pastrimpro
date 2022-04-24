import Image from 'next/image'
import SVG from 'react-inlinesvg'
export default function Projects() {
  return (
    <div className="container mt-48 md:mt-0 h-screen">
      <p className="py-4 text-center md:py-2 text-orange-500">Best services</p>
      <h2 className="text-center md:leading-tight text-3xl md:text-4xl font-bold text-gray-800  ">
        Our Work Process
      </h2>
      <div className="flex justify-center ">
        <SVG src="/svg/line.svg" className="w-36 h-6 text-black rounded-md " alt="house icon" />
      </div>
      <p className=" py-8 text-center text-base text-gray-500">
        Take a look at the best work we&apos;ve done by simply clicking the link below.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8  ">
        <div className=" rounded-lg  text-gray-500 bg-white">
          <Image
            // loader={myLoader}
            priority
            src="/images/heropic.jpg"
            layout="intrinsic"
            alt="Header"
            objectFit="cover"
            quality={100}
            className="rounded-lg"
            width={460}
            height={460}
          />
        </div>
        <div className=" rounded-lg  text-gray-500 bg-white">
          <Image
            // loader={myLoader}
            priority
            src="/images/heropic.jpg"
            layout="intrinsic"
            alt="Header"
            objectFit="cover"
            quality={100}
            className="rounded-lg"
            width={460}
            height={460}
          />
        </div>
        <div className=" rounded-lg  text-gray-500 bg-white">
          <Image
            // loader={myLoader}
            priority
            src="/images/heropic.jpg"
            layout="intrinsic"
            alt="Header"
            objectFit="cover"
            quality={100}
            className="rounded-lg"
            width={460}
            height={460}
          />
        </div>
      </div>
    </div>
  )
}
