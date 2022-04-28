import Link from 'next/link'
import { useState } from 'react'
import SVG from 'react-inlinesvg'
import { Link as ScrollLink } from 'react-scroll'
const NavItem = ({ children, href }) => {
  return (
    <li>
      <ScrollLink
        to={href}
        className="cursor-pointer lg:hover:text-gray-950 "
        activeClass="md:text-gray-950  lg:before:bg-gray-950 menu-item"
        spy={true}
        smooth={true}
        offset={-200}
      >
        <div className="py-4">{children}</div>
      </ScrollLink>
    </li>
  )
}

export default function Navigation() {
  const [menu, setMenu] = useState(false)

  return (
    <div className="bg-gray-250 flex items-center sticky top-0 z-50">
      <div className="container">
        <div className="row py-6 justify-between items-center">
          <div className="col-3">
            <Link href="/" passHref aria-label="Logo">
              <a>
                <div className="  md:pt-0">
                  <p className="font-bold text-gray-950 text-2xl">Pastrim Pro</p>
                </div>
              </a>
            </Link>
          </div>
          <div className="col-2 md:hidden block">
            <label htmlFor="menu-toggle" className="cursor-pointer">
              <SVG
                src="../svg/menu.svg"
                className="fill-current text-gray-950 w-6 h-6"
                onClick={() => setMenu(!menu)}
              />
            </label>
          </div>

          <div
            className={`md:col-6 md:flex justify-center space-x-12 md:justify-end ${
              menu ? ' flex' : ' hidden'
            }`}
          >
            <ul className="flex-col w-full font-bold divide-y lg:flex text-gray-950 md:text-zinc-700 md:font-medium pt-14 lg:space-x-12 lg:w-auto md:p-0 md:flex-row lg:justify-center text-center md:items-center lg:text-left md:divide-y-2 lg:divide-y-0 divide-gray-950">
              <NavItem href="home">Home</NavItem>
              <NavItem href="about">About</NavItem>
              <NavItem href="services">Services</NavItem>
              <a rel="noopener noreferrer" aria-label="phone" href="tel:00389 79 322 958">
                <div className="flex justify-center pt-6 md:pt-0 items-center space-x-4 ">
                  <SVG
                    src="/svg/call.svg"
                    className="bg-gray-950 hover:bg-gray-3 w-10 h-10 p-2  text-white rounded-full"
                    alt="phone icon"
                  />

                  {/* <p className="text-gray-600"> +389 79 322 958</p> */}
                </div>
              </a>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}
