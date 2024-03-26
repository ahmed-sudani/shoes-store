import { Helmet } from 'react-helmet'
import { LazyLoadImage } from 'react-lazy-load-image-component'
import { product as productData } from '../../data/product.json'
import CartEditComponent from '../components/cart/CartEdit'
import Layout from '../components/Layout'
import FeaturedImage from '../components/product/FeaturedImage'
import GalleryModel from '../components/product/GalleryModel'
import ProductDetails from '../components/product/ProductDetails'
import ThumbsList from '../components/product/ThumbsList'
import useGalleryModelControl from '../hooks/useGalleryModelControl'

function Product() {
  const galleryControl = useGalleryModelControl(productData)

  return (
    <Layout>
      <Helmet>
        <title>Sneakers | Product</title>
      </Helmet>
      <main className='flex items-start max-md:flex-col xl:mx-40 xl:my-20 md:m-10 xl:px-10 xl:gap-40 md:gap-10 justify-between'>
        <div className='xl:w-1/3 md:w-1/2 w-full flex flex-col items-stretch gap-5'>
          <div className='max-md:hidden'>
            <LazyLoadImage
              effect='blur'
              placeholderSrc={productData.images[0].image}
              className='w-full rounded-xl'
              src={galleryControl.activeGalleryImage.thumb}
            />
          </div>

          <div className='hidden max-md:block'>
            <FeaturedImage galleryControl={galleryControl} />
          </div>

          <div className='max-md:hidden'>
            <ThumbsList product={productData} galleryControl={galleryControl} />
          </div>
        </div>

        <div className='md:w-1/2 flex flex-col md:gap-10 gap-5 max-md:px-10 max-md:py-5'>
          <ProductDetails product={productData} />
          <CartEditComponent product={productData} />
        </div>
      </main>
      <GalleryModel product={productData} galleryControl={galleryControl} />
    </Layout>
  )
}

export default Product
