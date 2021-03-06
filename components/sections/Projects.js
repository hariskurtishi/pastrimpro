import Image from 'next/image'
import SVG from 'react-inlinesvg'
export default function Projects() {
  return (
    <div id="projects" className="container my-28">
      <p className="py-4 text-center md:py-2 text-orange-500">Shërbimet më të kërkuara</p>
      <h2 className="text-center md:leading-tight text-3xl md:text-4xl font-bold text-gray-800  ">
        Procesi i punës tonë
      </h2>
      <div className="flex justify-center ">
        <SVG src="/svg/line.svg" className="w-36 h-6 text-black rounded-md " alt="house icon" />
      </div>
      <p className=" py-8 text-center text-base text-gray-600">
        Më poshtë mund të shihni si duket procesi punës sonë
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8  ">
        <div className=" rounded-lg  text-gray-600 bg-white">
          <Image
            // loader={myLoader}
            priority
            src="/images/1.jpg"
            layout="intrinsic"
            alt="Header"
            objectFit="cover"
            quality={100}
            className="rounded-lg"
            width={460}
            height={460}
          />
        </div>
        <div className=" rounded-lg  text-gray-600 bg-white">
          <Image
            // loader={myLoader}
            priority
            src="/images/2.jpg"
            layout="intrinsic"
            alt="Header"
            objectFit="cover"
            quality={100}
            className="rounded-lg"
            width={460}
            height={460}
          />
        </div>
        <div className=" rounded-lg  text-gray-600 bg-white">
          <Image
            // loader={myLoader}
            priority
            src="/images/3.jpg"
            layout="intrinsic"
            alt="Header"
            objectFit="cover"
            quality={100}
            className="rounded-lg"
            width={460}
            height={460}
          />
        </div>
        <div className=" rounded-lg  text-gray-600 bg-white">
          <Image
            // loader={myLoader}
            priority
            src="/images/4.jpg"
            layout="intrinsic"
            alt="Header"
            objectFit="cover"
            quality={100}
            className="rounded-lg"
            width={460}
            height={460}
          />
        </div>
        <div className=" rounded-lg  text-gray-600 bg-white">
          <Image
            // loader={myLoader}
            priority
            src="/images/5.jpg"
            layout="intrinsic"
            alt="Header"
            objectFit="cover"
            quality={100}
            className="rounded-lg"
            width={460}
            height={460}
          />
        </div>
        <div className=" rounded-lg  text-gray-600 bg-white">
          <Image
            // loader={myLoader}
            priority
            src="/images/6.jpg"
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
