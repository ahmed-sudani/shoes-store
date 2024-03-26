import { useState } from 'react'
import Avatar from '../Avatar'
import CartComponent from '../cart'
import MenuIcon from '../icons/MenuIcon'
import Logo from './Logo'
import Nav from './Nav'

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const toggleMenu = () => setIsMenuOpen((prev) => !prev)

  return (
    <header className='flex items-center xl:gap-20 gap-5 xl:mx-40 xl:py-10 py-5 max-xl:px-10 border-b border-b-gray-500'>
      {!isMenuOpen && (
        <MenuIcon onClick={toggleMenu} className='max-md:block hidden' />
      )}
      <Logo />
      <Nav {...{ isMenuOpen, setIsMenuOpen, toggleMenu }} />
      <div className='flex items-center ml-auto xl:gap-10 gap-5'>
        <CartComponent />
        <Avatar />
      </div>
    </header>
  )
}
