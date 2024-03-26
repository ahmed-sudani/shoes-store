import { useSetRecoilState } from 'recoil'
import cartSate from '../../states/cart'
import CartType from '../../types/cart'
import formateCurrency from '../../util/formateCurrency'

export default function CartItem({ cart }: { cart: CartType }) {
  const setCart = useSetRecoilState(cartSate)
  return (
    <div className='flex items-center justify-between gap-5'>
      <img className='w-10 rounded' src={cart.thumb} alt='' />
      <div className='text-sm'>
        <p>{cart.name}</p>
        <p>
          {formateCurrency(cart.price)} * {cart.count}
          <strong> {formateCurrency(cart.price * cart.count)}</strong>
        </p>
      </div>
      <img
        className='cursor-pointer'
        onClick={() => setCart((prev) => ({ ...prev, count: 0 }))}
        src='/images/icon-delete.svg'
        alt=''
      />
    </div>
  )
}
