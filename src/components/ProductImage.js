import React, { useState, useLayoutEffect } from 'react'
import './product-image.scss'
import previousArrow from '../images/icon-previous.svg'
import nextArrow from '../images/icon-next.svg'
import Lightbox from './Lightbox'

export default function MainImage() {


  const [imagePosition, setImagePosition] = useState(1)
  const [lightbox, setLightbox] = useState(false)
  const [windowSize, setWindowSize] = useState(0)
  const thumbnails = [1, 2, 3, 4]

  useLayoutEffect(() => {
    function updateSize() {
      setWindowSize(window.innerWidth);
    }
    window.addEventListener('resize', updateSize);
    updateSize();
    return () => window.removeEventListener('resize', updateSize);
  }, []);

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

      {lightbox && <Lightbox setLightbox={setLightbox} />}

      <div className='carousel'>
        <img
          src={previousArrow}
          alt='left arrow' className='previous-arrow'
          onClick={handlePrevious}
        />

        <img
          alt='shoes'
          className='main-image'
          src={require('../images/image-product-' + imagePosition + '.jpg')}
          onClick={() => windowSize >= 768 && setLightbox(true)}
        />

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
