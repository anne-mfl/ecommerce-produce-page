import React, { useState } from 'react'
import './lightbox.scss'
import closeIcon from '../images/icon-close-orange.svg'
import previousArrow from '../images/icon-previous.svg'
import nextArrow from '../images/icon-next.svg'
import previousArrowOrange from '../images/icon-previous-orange.svg'
import nextArrowOrange from '../images/icon-next-orange.svg'

export default function Lightbox({ setLightbox }) {

  const [imagePosition, setImagePosition] = useState(1)
  const [previousArrowHovered, setPreviousArrowHovered] = useState(false)
  const [nextArrowHovered, setNextArrowHovered] = useState(false)

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
    <div className='lightbox'>

      <div className='carousel-wrapper'>

        <div className='lightbox-close-icon-wrapper'>
          <img
            src={closeIcon}
            alt='close'
            onClick={() => setLightbox(false)}
            className='lightbox-close-icon'
          />
        </div>

        <div className='carousel'>
          {previousArrowHovered ?
            <img
              src={previousArrowOrange}
              alt='left arrow'
              className='previous-arrow-lightbox'
              onClick={handlePrevious}
              onMouseLeave={() => setPreviousArrowHovered(false)}
            />
            :
            <img
              src={previousArrow}
              alt='left arrow'
              className='previous-arrow-lightbox'
              onMouseEnter={() => setPreviousArrowHovered(true)}
            />
          }

          <img
            alt='shoes'
            className='main-image-lightbox'
            src={require('../images/image-product-' + imagePosition + '.jpg')}
            onClick={() => setLightbox(true)}
          />

          {nextArrowHovered ?
            <img
              src={nextArrowOrange}
              alt='right arrow'
              className='next-arrow-lightbox'
              onClick={handleNext}
              onMouseLeave={() => setNextArrowHovered(false)}
            />
            :
            <img
              src={nextArrow}
              alt='right arrow'
              className='next-arrow-lightbox'
              onMouseEnter={() => setNextArrowHovered(true)}
            />
          }

        </div>

        <div className="thumbnails">
          {thumbnails.map((t) => (
            <img
              src={require('../images/image-product-' + t + '-thumbnail.jpg')}
              alt='thumbnail of shoes'
              onClick={() => setImagePosition(t)}
              className={imagePosition === t ? 'thumbnail-selected-lightbox' : null}
              key={t}
            />
          ))}
        </div>

      </div>


    </div>
  )
}
