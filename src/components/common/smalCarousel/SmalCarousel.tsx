import { useState } from 'react'
import { Product } from '../../../features/products/products.interfaces'
import { Button, Card, CardContent, CardMedia, Typography } from '@mui/material'
import { PrimaryThemeColor, WhiteTeamColor } from '../../../constants/common'
import { useNavigate } from 'react-router-dom'

const SmalCarousel = ({ products }: { products: Product[] }) => {
  const [startIndex, setStartIndex] = useState(0)
  const itemsPerPage = 3
  const navigate = useNavigate()

  const handlePrevClick = () => {
    const newStartIndex = (startIndex - 1 + products.length) % products.length
    setStartIndex(newStartIndex)
  }

  const handleNextClick = () => {
    const newStartIndex = (startIndex + 1) % products.length
    setStartIndex(newStartIndex)
  }

  const rotatedProducts = [...products.slice(startIndex), ...products.slice(0, startIndex)]

  return (
    <div className='container'>
      <div className='slide-wrapper'>
        <button
          id='prev_slide'
          style={{ backgroundColor: PrimaryThemeColor, color: WhiteTeamColor, cursor: 'pointer' }}
          className='slide-button'
          onClick={handlePrevClick}
        >
          &lt;
        </button>
        <div className='cart-list'>
          {rotatedProducts.slice(0, itemsPerPage).map((product) => (
            <Card className='cart-item' key={product.id} sx={{ m: 1 }}>
              <CardMedia component='img' alt={product.name} height='140' image={product.pic} />
              <CardContent>
                <Typography variant='h5'>{product.name}</Typography>
                <Button
                  onClick={() => {
                    navigate(`/user/product/${product.id}`)
                  }}
                >
                  Details
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
        <button
          style={{ backgroundColor: PrimaryThemeColor, color: WhiteTeamColor, cursor: 'pointer' }}
          id='next_slide'
          className='slide-button'
          onClick={handleNextClick}
        >
          &gt;
        </button>
      </div>
    </div>
  )
}

export default SmalCarousel
