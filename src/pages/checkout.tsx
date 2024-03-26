import { useState } from 'react'
import { Helmet } from 'react-helmet'
import { useRecoilValue } from 'recoil'
import AddressComponent from '../components/AddressComponent'
import Layout from '../components/Layout'
import OrderSummary from '../components/OrderSummary'
import cartSate from '../states/cart'
import formateCurrency from '../util/formateCurrency'

export default function Checkout() {
  const cart = useRecoilValue(cartSate)
  const [shippingCost, setShippingCost] = useState(5)
  const [billingAddressIsShippingAddress, setBillingAddressIsShippingAddress] =
    useState(true)

  return (
    <Layout>
      <Helmet>
        <title>Sneakers | Checkout</title>
      </Helmet>
      <main className='flex max-md:flex-col xl:mx-40 mx-10 xl:my-20 md:m-10 xl:px-10 py-10 xl:gap-40 gap-10 justify-between'>
        <OrderSummary {...{ shippingCost, cart }} />
        <div className='flex gap-5 flex-col md:w-1/2'>
          <div className='flex flex-col gap-2'>
            <h2 className='text-xl'>Shipping Information</h2>
            <div className='flex flex-col gap-2'>
              <label htmlFor='email'>Email</label>
              <input
                className='text-sm p-2 py-3 rounded border border-gray-300'
                type='email'
                name='email'
                id='email'
              />
            </div>
            <AddressComponent name='Shipping Address' />
          </div>

          <div className='flex flex-col gap-2'>
            <h2 className='text-xl'>Payment Details</h2>
            <div className='flex flex-col gap-2'>
              <label>Card Information</label>
              <div className='flex flex-col'>
                <div className='basis-full relative'>
                  <input
                    placeholder='1234 1234 1234 1234'
                    className='text-sm p-2 py-3 rounded-t border border-b-0 border-gray-300 w-full'
                  />
                  <div className='flex gap-1 items-center absolute top-1/2 -translate-y-1/2 right-4'>
                    <img
                      className='w-10'
                      src='https://www.svgrepo.com/show/452128/visa.svg'
                    />
                    <img
                      className='w-10'
                      src='https://www.svgrepo.com/show/362015/mastercard-3.svg'
                    />
                    <img
                      className='w-10'
                      src='https://www.svgrepo.com/show/508695/jcb.svg'
                    />
                  </div>
                </div>
                <div className='flex basis-full'>
                  <input
                    placeholder='MM/YY'
                    className='text-sm p-2 py-3 rounded-b border border-r-0 border-gray-300 w-1/2'
                  />
                  <input
                    placeholder='CVC'
                    className='text-sm p-2 py-3 rounded-b border border-gray-300 w-1/2'
                  />
                </div>
              </div>
            </div>
            <div className='flex flex-col gap-2'>
              <div className='flex gap-2'>
                <input
                  type='checkbox'
                  defaultChecked
                  id='billingAddress'
                  className='peer/billingAddress'
                  onChange={(e) =>
                    setBillingAddressIsShippingAddress(e.currentTarget.checked)
                  }
                />
                <label htmlFor='billingAddress'>
                  Billing address same as shipping address
                </label>
              </div>
              {!billingAddressIsShippingAddress && (
                <AddressComponent name='Billing Address' />
              )}
            </div>
          </div>

          <button className='py-5 text-center bg-gray-500 font-bold text-white rounded-xl'>
            Pay {formateCurrency(cart.price * cart.count + shippingCost)}
          </button>
        </div>
      </main>
    </Layout>
  )
}
