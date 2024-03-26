import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { RecoilRoot } from 'recoil'
import Home from './pages'
import AboutUs from './pages/about'
import Checkout from './pages/checkout'
import Contact from './pages/contact'
import Product from './pages/product'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
  },
  {
    path: 'product',
    element: <Product />,
  },
  {
    path: 'checkout',
    element: <Checkout />,
  },
  {
    path: 'contact',
    element: <Contact />,
  },

  {
    path: 'about',
    element: <AboutUs />,
  },
])

function App() {
  return (
    <RecoilRoot>
      <RouterProvider router={router} />
    </RecoilRoot>
  )
}

export default App
