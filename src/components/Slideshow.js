import React, { useState, useEffect } from 'react'
import { useRouter } from 'next/router'
import Carousel from 'react-bootstrap/Carousel'

const images = [
  'https://homepages.cae.wisc.edu/~ece533/images/arctichare.png',
  'https://homepages.cae.wisc.edu/~ece533/images/boat.png',
  'https://homepages.cae.wisc.edu/~ece533/images/fruits.png'
]

const Slideshow = () => {
  const router = useRouter()
  const [index, setIndex] = useState(0)

  useEffect(() => {
    // Always do navigations after the first render
    router.push('/?counter=10', undefined, { shallow: true })
  }, [])

  useEffect(() => {
    // The counter changed!
  }, [router.query.counter])

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex)
  }
  return (
    <Carousel activeIndex={index} onSelect={handleSelect} interval='9999999999'>
      {images.map((image, index) => (
        <Carousel.Item key={index}>
          <img src={image} alt='First slide' />
        </Carousel.Item>
      ))}
    </Carousel>
  )
}

export default Slideshow
