import SVG from 'react-inlinesvg'
export default function Services() {
  return (
    <div className="container">
      <p className="py-4 text-center md:text-left md:py-4 text-orange-500">Best services</p>
      <h2 className="text-center md:leading-tight md:text-left text-3xl md:text-4xl font-bold text-gray-800">
        Our Services
      </h2>
      <p className="py-8 text-center text-base md:text-left text-gray-500">
        While we can customize your cleaning plan to suit your needs, most clients schedule regular
        cleaning services:
      </p>

      <div className="p-4 bg-blue-300 rounded-md">
        <SVG src="/svg/house.svg" className="w-6 text-black rounded-md " alt="house icon" />
      </div>
    </div>
  )
}
