import React, { useState } from 'react'
import './product-image.scss'
import previousArrow from '../images/icon-previous.svg'
import nextArrow from '../images/icon-next.svg'
import productImage1 from '../images/image-product-1.jpg'
import productImage2 from '../images/image-product-2.jpg'
import productImage3 from '../images/image-product-3.jpg'
import productImage4 from '../images/image-product-4.jpg'

// import productThumbnail1 from '../images/image-product-1-thumbnail.jpg'
// import productThumbnail2 from '../images/image-product-2-thumbnail.jpg'
// import productThumbnail3 from '../images/image-product-3-thumbnail.jpg'
// import productThumbnail4 from '../images/image-product-4-thumbnail.jpg'

export default function MainImage() {

  const [imagePosition, setImagePosition] = useState(1)

  const thumbnails = [1, 2, 3, 4]

  const handlePrevious = () => {
    if (imagePosition < 2) {
      setImagePosition(4)
    } else {
      setImagePosition(imagePosition - 1)
    }
  }

  const handleNext = () => {
    if (imagePosition > 3) {
      setImagePosition(1)
    } else {
      setImagePosition(imagePosition + 1)
    }
  }

  return (
    <div className='carousel-wrapper'>

      <div className='carousel'>
        <img
          src={previousArrow}
          alt='left arrow' className='previous-arrow'
          onClick={handlePrevious}
        />

        {imagePosition === 1 ?
          <img src={productImage1} alt='shoes' className='main-image' />
          :
          imagePosition === 2 ?
            <img src={productImage2} alt='shoes' className='main-image' />
            :
            imagePosition === 3 ?
              <img src={productImage3} alt='shoes' className='main-image' />
              :
              // imagePosition === 4 ?
              <img src={productImage4} alt='shoes' className='main-image' />
        }

        <img
          src={nextArrow}
          alt='right arrow'
          className='next-arrow'
          onClick={handleNext}
        />
      </div>

      <div className="thumbnails">
        {thumbnails.map((t) => (
          <img
            src={require('../images/image-product-' + t + '-thumbnail.jpg')}
            alt='thumbnail of shoes'
            onClick={() => setImagePosition(t)}
            className={imagePosition === t ? 'thumbnail-selected' : null}
            key={t}
          />
        ))}
      </div>

    </div>
  )
}
