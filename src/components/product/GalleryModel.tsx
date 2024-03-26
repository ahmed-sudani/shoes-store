import useOutsideAlerter from '../../hooks/useOutsideAlerter'
import ProductType, { GalleryControlType } from '../../types/product'
import cn from '../../util/cn'
import FeaturedImage from './FeaturedImage'
import ThumbsList from './ThumbsList'

interface GalleryModelProps {
  product: ProductType
  galleryControl: GalleryControlType
}
const GalleryModel: React.FC<GalleryModelProps> = ({
  product,
  galleryControl,
}) => {
  const modelRef = useOutsideAlerter<HTMLDivElement>(() =>
    galleryControl.setProductGalleryModelIsOpen(false),
  )

  const closeModel = () => {
    galleryControl.setProductGalleryModelIsOpen(false)
  }

  return (
    <div
      className={cn(
        'absolute z-30 bg-black bg-opacity-80 top-0 bottom-0 left-0 right-0 justify-center items-center',
        galleryControl.productGalleryModelIsOpen ? 'md:flex' : 'hidden',
      )}
    >
      <div
        ref={modelRef}
        className='xl:w-1/3 md:w-1/2 w-full flex flex-col items-center gap-5'
      >
        <img
          onClick={closeModel}
          className='self-end cursor-pointer'
          src='/images/icon-close.svg'
          alt='Close'
        />
        <FeaturedImage galleryControl={galleryControl} />
        <ThumbsList galleryControl={galleryControl} product={product} />
      </div>
    </div>
  )
}

export default GalleryModel
