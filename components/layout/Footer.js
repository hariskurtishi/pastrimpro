import Link from 'next/link'
import SVG from 'react-inlinesvg'
export default function Footer() {
  return (
    <div>
      <div className=" bg-opacity-90">
        <div className="bg-blue-300 ">
          <div className="flex items-center justify-between">
            <div className="container items-center justify-between md:flex">
              <div className="flex justify-center md:justify-start">
                <Link href="/" passHref aria-label="Logo">
                  <a>
                    <div className="col-3">
                      <p className="font-bold text-white text-2xl">Pastrim Pro</p>
                    </div>
                  </a>
                </Link>
              </div>

              <div className="my-12 text-lg font-medium text-center text-white md:text-base">
                © All Rights Reserved. 2022 Made by {}
                <a className="transition-all" rel="noopener noreferrer">
                  <span className="text-white">Haris Kurtishi</span>
                </a>
              </div>

              <div className="flex items-center justify-center mb-10 space-x-4 md:mb-0 md:justify-end ">
                <div className="">
                  <a
                    rel="noopener noreferrer"
                    aria-label="facebook"
                    href="https://www.facebook.com/pastrimprogostivar"
                  >
                    <SVG
                      src="/svg/fb.svg"
                      className="w-12 h-12 p-2 transition-all text-zinc-900 hover:text-orange-500 rounded-md cursor-pointer fill-current "
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
                      className="w-12 h-12 p-2 transition-all text-white hover:text-orange-500 rounded-md cursor-pointer fill-current "
                      alt="email icon"
                    />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
