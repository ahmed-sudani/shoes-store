type ProductType = {
  name: string
  description: string
  price: number
  images: { thumb: string; image: string }[]
  discount?: string
  priceAfterDiscount?: number
}

export type GalleryControlType = {
  activeGalleryImage: {
    thumb: string
    image: string
  }
  moveToNextActiveImage: () => void
  moveToPerviousActiveImage: () => void
  moveToActiveImage: React.Dispatch<React.SetStateAction<number>>
  activeGalleryImageIndex: number
  productGalleryModelIsOpen: boolean
  setProductGalleryModelIsOpen: React.Dispatch<React.SetStateAction<boolean>>
}

export default ProductType
