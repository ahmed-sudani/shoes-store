import React from 'react'
import Footer from './Footer'
import Header from './header'

interface LayoutProps {
  children: string | JSX.Element | JSX.Element[]
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  )
}

export default Layout
