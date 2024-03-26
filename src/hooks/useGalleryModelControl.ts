import { useState } from 'react'
import ProductType, { GalleryControlType } from '../types/product'

const useGalleryModelControl = ({
  images,
}: Pick<ProductType, 'images'>): GalleryControlType => {
  const [activeModelImage, setActiveModelImage] = useState(0)

  const [productGalleryModelIsOpen, setProductGalleryModelIsOpen] =
    useState(false)

  const moveToNextActiveImage = () =>
    setActiveModelImage((prev) => (prev - 1 + images.length) % images.length)

  const moveToPerviousActiveImage = () =>
    setActiveModelImage((prev) => (prev + 1) % images.length)

  return {
    activeGalleryImage: images[activeModelImage],
    activeGalleryImageIndex: activeModelImage,
    productGalleryModelIsOpen,
    moveToNextActiveImage,
    moveToPerviousActiveImage,
    moveToActiveImage: setActiveModelImage,
    setProductGalleryModelIsOpen,
  }
}

export default useGalleryModelControl
