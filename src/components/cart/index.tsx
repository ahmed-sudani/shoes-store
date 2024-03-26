import { useState } from 'react'
import { Link } from 'react-router-dom'
import { useRecoilValue } from 'recoil'
import useOutsideAlerter from '../../hooks/useOutsideAlerter'
import cartSate from '../../states/cart'
import CartItem from './CartItem'

export default function CartComponent() {
  const cart = useRecoilValue(cartSate)
  const [isCartModelOpen, setIsCartModelOpen] = useState(false)
  const toggleCartModel = () => setIsCartModelOpen((prev) => !prev)
  const cartModelRef = useOutsideAlerter<HTMLDivElement>(() =>
    setIsCartModelOpen(false),
  )

  return (
    <div ref={cartModelRef}>
      <div onClick={toggleCartModel} className='relative cursor-pointer'>
        <span className='absolute -top-3 -right-2 w-4 h-4 text-center rounded-full text-xs text-white bg-red-500'>
          {cart.count}
        </span>
        <img src='/images/icon-cart.svg' alt='' />
      </div>

      {isCartModelOpen && (
        <div className='z-30 absolute rounded-lg flex flex-col min-h-60 border bg-white w-80 top-28 right-40 shadow-xl max-xl:right-10 max-xl:top-20'>
          <span className='block p-5 border-b-2 border-gray-100'>Cart</span>
          <div className='flex flex-col flex-grow justify-center items-center p-5 gap-5'>
            {!cart.count && <p>your cart is empty</p>}
            {!!cart.count && <CartItem cart={cart} />}
            {!!cart.count && (
              <Link
                to='/checkout'
                className='bg-red-500 text-white font-bold py-4 w-full text-center rounded-xl'
              >
                Checkout
              </Link>
            )}
          </div>
        </div>
      )}
    </div>
  )
}
