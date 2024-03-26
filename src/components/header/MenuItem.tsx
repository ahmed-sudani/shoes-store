import React from 'react'
import { Link } from 'react-router-dom'
import cn from '../../util/cn'

interface MenuItemProps {
  path: string
  label: string
}

const MenuItem: React.FC<MenuItemProps> = ({ path, label }) => (
  <li
    className={cn(
      window.location.pathname === path && 'text-red-500 font-bold',
    )}
  >
    <Link to={path}>{label}</Link>
  </li>
)

export default MenuItem
