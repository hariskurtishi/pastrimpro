import Link from 'next/link'
import SVG from 'react-inlinesvg'
export default function Footer() {
  return (
    <div>
      <div className="">
        <div className="">
          <div className="flex items-center justify-between">
            <div className="container items-center justify-between md:flex">
              <div className="flex justify-center md:justify-start">
                <Link href="/" passHref aria-label="Logo">
                  <a>
                    <div className=" pt-16 md:pt-0">
                      <p className="font-bold text-gray-950 text-2xl">Pastrim Pro</p>
                    </div>
                  </a>
                </Link>
              </div>

              <div className="my-12 text-lg font-medium text-center text-gray-600 md:text-base">
                © All Rights Reserved. 2022 Made by {}
                <a
                  href="https://hariskurtishi.com/"
                  className="transition-all hover:border-b"
                  rel="noopener noreferrer"
                >
                  <span className="text-gray-950 hover:text-bg-gray-3">Haris Kurtishi</span>
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
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
