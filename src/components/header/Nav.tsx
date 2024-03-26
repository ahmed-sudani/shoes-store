import React from 'react'
import useOutsideAlerter from '../../hooks/useOutsideAlerter'
import cn from '../../util/cn'
import CloseIcon from '../icons/CloseIcon'
import MenuItem from './MenuItem'

interface NavProps {
  isMenuOpen: boolean
  setIsMenuOpen: React.Dispatch<React.SetStateAction<boolean>>
  toggleMenu: () => void
}

const Nav: React.FC<NavProps> = ({ isMenuOpen, setIsMenuOpen, toggleMenu }) => {
  const navRef = useOutsideAlerter<HTMLDivElement>(() => setIsMenuOpen(false))
  return (
    <nav
      ref={navRef}
      className={cn(
        'md:block max-md:absolute max-md:px-10 max-md:w-1/2 max-md:shadow-xl max-md:pt-10 max-md:bg-white z-20 top-0 left-0 bottom-0',
        isMenuOpen ? 'block' : 'hidden',
      )}
    >
      <ul className='flex gap-10 max-md:flex-col max-md:items-start'>
        <CloseIcon onClick={toggleMenu} className='md:hidden' />
        <MenuItem path='/about' label='About' />
        <MenuItem path='/contact' label='Contact' />
      </ul>
    </nav>
  )
}

export default Nav
