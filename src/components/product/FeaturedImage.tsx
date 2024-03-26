import React from 'react'
import { LazyLoadImage } from 'react-lazy-load-image-component'
import { GalleryControlType } from '../../types/product'

interface FeaturedImageProps {
  galleryControl: GalleryControlType
}

const FeaturedImage: React.FC<FeaturedImageProps> = ({ galleryControl }) => {
  const moveToNextActiveImage = () => {
    galleryControl.moveToNextActiveImage()
  }

  const moveToPreviousActiveImage = () => {
    galleryControl.moveToPerviousActiveImage()
  }

  return (
    <div className='relative'>
      <div
        onClick={moveToNextActiveImage}
        className='absolute z-10 cursor-pointer md:-left-6 left-6 top-1/2 -translate-y-1/2 w-12 h-12 flex items-center justify-center rounded-full bg-white'
      >
        <img src='/images/icon-previous.svg' alt='Previous' />
      </div>
      <div
        onClick={moveToPreviousActiveImage}
        className='absolute z-10 cursor-pointer md:-right-6 right-6 top-1/2 -translate-y-1/2 w-12 h-12 flex items-center justify-center rounded-full bg-white'
      >
        <img src='/images/icon-next.svg' alt='Next' />
      </div>
      <div className='w-full'>
        <LazyLoadImage
          effect='blur'
          className='w-full md:rounded-xl'
          src={galleryControl.activeGalleryImage.image}
        />
      </div>
    </div>
  )
}

export default FeaturedImage
