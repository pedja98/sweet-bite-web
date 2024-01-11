import React, { useState } from 'react'
import { Product } from '../../../features/products/products.interfaces'
import { Button, Card, CardContent, CardMedia, Typography } from '@mui/material'

const SmalCarousel = ({ products }: { products: Product[] }) => {
  const [startIndex, setStartIndex] = useState(0)
  const itemsPerPage = 3 // Adjust this value as needed

  const handlePrevClick = () => {
    const newStartIndex = Math.max(0, startIndex - itemsPerPage)
    setStartIndex(newStartIndex)
  }

  const handleNextClick = () => {
    const newStartIndex = Math.min(products.length - itemsPerPage, startIndex + itemsPerPage)
    setStartIndex(newStartIndex)
  }

  return (
    <div className='container'>
      <div className='slide-wrapper'>
        <button id='prev_slide' className='slide-button material-symbol-rounded' onClick={handlePrevClick}>
          &lt;
        </button>
        <div className='cart-list'>
          {products.slice(startIndex, startIndex + itemsPerPage).map((product) => (
            <Card className='cart-item' key={product.id} sx={{ m: 1 }}>
              <CardMedia component='img' alt={product.name} height='140' image={product.pic} />
              <CardContent>
                <Typography variant='h5'>{product.name}</Typography>
                <Button>Details</Button>
              </CardContent>
            </Card>
          ))}
        </div>
        <button id='next_slide' className='slide-button material-symbol-rounded' onClick={handleNextClick}>
          &gt;
        </button>
      </div>
    </div>
  )
}

export default SmalCarousel
