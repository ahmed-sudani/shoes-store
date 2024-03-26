import CartType from '../types/cart'
import formateCurrency from '../util/formateCurrency'

interface OrderSummaryProps {
  cart: CartType
  shippingCost: number
}

const OrderSummary = ({ cart, shippingCost }: OrderSummaryProps) => (
  <section className='flex flex-col gap-5 md:w-1/2'>
    <div>
      <span>Pay Sneakers</span>
      <h2 className='text-4xl'>
        {formateCurrency(cart.price * cart.count + shippingCost)}
      </h2>
    </div>
    <div className='flex items-center gap-4'>
      <img className='w-20 rounded' src={cart.thumb} alt='' />
      <div className='flex flex-col gap-2 flex-grow'>
        <div className='flex justify-between items-center text font-bold'>
          <span>{cart.name}</span>
          <span>{formateCurrency(cart.price * cart.count)}</span>
        </div>
        <div className='flex justify-between items-center text-sm'>
          <span>QTY {cart.count}</span>
          {cart.count > 1 && <span>{formateCurrency(cart.price)} each</span>}
        </div>
      </div>
    </div>
    <div className='flex flex-col pl-24 gap-5'>
      <div className='flex justify-between items-center text font-bold'>
        <span>Subtotal</span>
        <span>{formateCurrency(cart.price * cart.count)}</span>
      </div>
      <hr />
      <div className='text-sm'>
        <div className='flex justify-between items-center'>
          <span>Shipping</span>
          <span>{formateCurrency(shippingCost)}</span>
        </div>
        <span>Grand shipping (3-5 business days)</span>
      </div>
      <hr />
      <div className='flex justify-between items-center text font-bold'>
        <span>Total due</span>
        <span>{formateCurrency(cart.price * cart.count + shippingCost)}</span>
      </div>
    </div>
  </section>
)

export default OrderSummary
