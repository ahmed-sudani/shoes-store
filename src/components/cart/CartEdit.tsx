import { useState } from 'react'
import { useRecoilState } from 'recoil'
import cartSate from '../../states/cart'
import ProductType from '../../types/product'

const CartEditComponent = ({ product }: { product: ProductType }) => {
  const [cart, setCart] = useRecoilState(cartSate)

  const increaseProductCount = () => setProductCount((prev) => ++prev)

  const decreaseProductCount = () =>
    setProductCount((prev) => (prev ? --prev : prev))

  const [productCount, setProductCount] = useState(cart.count)

  const handleOnAddToCartClick = () =>
    setCart({
      count: productCount,
      name: product.name,
      thumb: product.images[0].thumb,
      price: product.priceAfterDiscount || product.price,
    })

  return (
    <div className='flex xl:gap-10 md:gap-5 gap-2 max-md:flex-col'>
      <div className='flex items-center justify-between gap-5 rounded-xl bg-slate-100'>
        <button
          onClick={decreaseProductCount}
          className='border-none h-full w-10 py-4 flex items-center justify-center text-2xl font-extrabold text-red-500'
        >
          -
        </button>
        <span className='w-10 text-center flex-grow'>{productCount}</span>
        <button
          onClick={increaseProductCount}
          className='border-none h-full w-10 py-4 text-2xl font-extrabold text-red-500 flex items-center justify-center'
        >
          +
        </button>
      </div>
      <button
        onClick={handleOnAddToCartClick}
        className='flex gap-5 font-bold xl:w-32 md:w-40 items-center flex-grow justify-center rounded-xl hover:opacity-80 py-5 bg-red-500 text-white'
      >
        <img className='invert' src='/public/images/icon-cart.svg' alt='' />
        <span>
          {cart.count && cart.count !== productCount
            ? 'Update Cart'
            : 'Add To Cart'}
        </span>
      </button>
    </div>
  )
}

export default CartEditComponent
