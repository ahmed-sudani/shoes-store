import React from 'react'
import ProductType, { GalleryControlType } from '../../types/product'
import cn from '../../util/cn'

interface ThumbsListProps {
  product: Pick<ProductType, 'images'>
  galleryControl: GalleryControlType
}

const ThumbsList: React.FC<ThumbsListProps> = ({ product, galleryControl }) => {
  const handleOnGalleryThumbClick: React.MouseEventHandler<HTMLDivElement> = (
    e,
  ) => {
    const key = parseInt(e.currentTarget.getAttribute('data-key')!)
    galleryControl.moveToActiveImage(key)
    galleryControl.setProductGalleryModelIsOpen(true)
  }

  return (
    <div className='flex flex-grow-0 gap-5 justify-between'>
      {product.images.map((image, i) => (
        <div
          key={i}
          data-key={i}
          onClick={handleOnGalleryThumbClick}
          className={cn('w-1/5 cursor-pointer rounded-lg border-red-500', {
            'border-2': galleryControl.activeGalleryImageIndex === i,
          })}
        >
          <img
            src={image.thumb}
            alt={`Thumb ${i}`}
            className={cn(
              'w-full h-full object-cover rounded-md hover:opacity-50',
              {
                'opacity-50': galleryControl.activeGalleryImageIndex === i,
              },
            )}
          />
        </div>
      ))}
    </div>
  )
}

export default ThumbsList
