import Link from 'next/link'
import { useState } from 'react'
import SVG from 'react-inlinesvg'

import Button from '../Button'
const NavItem = ({ children, href }) => {
  return (
    <li className="w-full md:w-auto md:mr-6">
      <Link href={href}>
        <a className="block py-4 md:py-0 border-b border-gray-200 md:border-b-0 md:border-transparent">
          {children}
        </a>
      </Link>
    </li>
  )
}

export default function Navigation() {
  const [menu, setMenu] = useState(false)

  return (
    <div className="bg-gray-250 flex items-center">
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
            <ul className="flex w-full text-center text-gray-500 divide-y divide-gray-500 md:divide-y-0 md:space-x-12 p-5 flex-col md:w-auto md:p-0 md:flex-row items-center">
              <NavItem href="/">Home</NavItem>
              <NavItem href="/">About</NavItem>
              <NavItem href="/">Services</NavItem>
              <NavItem href="/">Pricing</NavItem>
            </ul>
          </div>
          <div className="hidden md:col-3 md:flex md:justify-end items-center">
            <Link href="#contact" passHref className="" aria-label="Contact Button">
              <Button as="a" variant="secondary">
                Get a Quote
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
