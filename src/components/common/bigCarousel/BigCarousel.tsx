import React from 'react'
import { Carousel } from 'react-responsive-carousel'
import 'react-responsive-carousel/lib/styles/carousel.min.css'
import { Typography } from '@mui/material'
import { makeStyles } from '@mui/styles'

const useStyles = makeStyles(() => ({
  carousel: {
    marginTop: 10,
    marginBottom: 10,
    width: '100%',
  },
  carouselItem: {
    position: 'relative',
    overflow: 'hidden',
    height: '400px',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    display: 'flex',
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  textContainer: {
    textAlign: 'left',
    position: 'absolute',
    bottom: 2,
    color: 'black',
    width: '100%',
  },
  promoText: {
    fontSize: '1.5rem',
    fontWeight: 'bold',
  },
}))

const BigCarousel = () => {
  const classes = useStyles()

  return (
    <Carousel showStatus={false} showArrows={false} showThumbs={false} className={classes.carousel}>
      <div
        className={classes.carouselItem}
        style={{
          backgroundImage: `url('/promotions/Promotion1.jpg')`,
        }}
      >
        <div className={classes.textContainer}>
          <Typography variant='h6' className={classes.promoText}>
            Promocija 1: Popust 30%
          </Typography>
        </div>
      </div>
      <div
        className={classes.carouselItem}
        style={{
          backgroundImage: `url('/promotions/Promotion2.jpg')`,
        }}
      >
        <div className={classes.textContainer}>
          <Typography variant='h6' className={classes.promoText}>
            Promocija 2: Popust 25%
          </Typography>
        </div>
      </div>
      <div
        className={classes.carouselItem}
        style={{
          backgroundImage: `url('/promotions/Promotion3.jpg')`,
        }}
      >
        <div className={classes.textContainer}>
          <Typography variant='h6' className={classes.promoText}>
            Promocija 3: Popust 10%
          </Typography>
        </div>
      </div>
    </Carousel>
  )
}

export default BigCarousel
