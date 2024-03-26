import formateCurrency from '../../util/formateCurrency'
import ProductType from '../../types/product'

const ProductDetails = ({ product }: { product: ProductType }) => (
  <div className='flex flex-col md:gap-10 gap-5'>
    <div className='flex flex-col md:gap-5 gap-2'>
      <p className='uppercase text-red-500'>sneakers Company</p>
      <h1 className='md:text-5xl text-3xl font-bold'>{product.name}</h1>
    </div>
    <p className='text-base'>{product.description}</p>
    <div className='flex max-md:items-center justify-between xl:flex-col gap-5'>
      <div className='flex gap-5'>
        <h2 className='text-2xl font-bold'>
          {formateCurrency(product.priceAfterDiscount || product.price)}
        </h2>
        <span className='text-sm font-bold rounded-lg px-2 py-1 bg-red-200 text-red-500'>
          {product.discount}
        </span>
      </div>
      <span className='line-through font-bold text-gray-300'>
        {formateCurrency(product.price)}
      </span>
    </div>
  </div>
)

export default ProductDetails
