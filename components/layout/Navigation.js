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
        offset={-100}
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
            <p className="font-bold text-gray-950 text-2xl">Pastrim Pro</p>
          </div>
          <div className="col-2 md:hidden block">
            <label htmlFor="menu-toggle" className="cursor-pointer">
              <SVG
                src="../svg/menu.svg"
                className="fill-current text-black w-6 h-6"
                onClick={() => setMenu(!menu)}
              />
            </label>
          </div>

          <div
            className={`md:col-6 md:flex justify-center md:justify-center ${
              menu ? ' flex' : ' hidden'
            }`}
          >
            <ul className="flex w-full text-center text-gray-500 divide-y divide-gray-950 md:divide-y-0 md:space-x-12 p-5 flex-col md:w-auto md:p-0 md:flex-row items-center">
              <NavItem href="home">Home</NavItem>
              <NavItem href="about">About</NavItem>
              <NavItem href="services">Services</NavItem>
              <NavItem href="">Pricing</NavItem>
            </ul>
          </div>
          <div className="hidden md:col-3 md:flex md:justify-end items-center">
            <a href="#contact" passHref className="" aria-label="Contact Button">
              <div as="a" variant="secondary">
                Get a Quote
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}
