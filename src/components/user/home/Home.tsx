import { Typography } from '@mui/material'
import { useAppSelector } from '../../../app/hooks'
import { selectProductByType } from '../../../features/products/products.slelectors'
import { RootNotCentered } from '../../../styles/common'
import BigCarousel from '../../common/bigCarousel/BigCarousel'
import SmalCarousel from '../../common/smalCarousel/SmalCarousel'
import { WhiteTeamColor } from '../../../constants/common'

const Home = () => {
  const cookies = useAppSelector(selectProductByType({ type: 'kolač' }))
  const cakes = useAppSelector(selectProductByType({ type: 'torta' }))
  return (
    <RootNotCentered>
      <BigCarousel />
      <Typography variant='h4' style={{ color: WhiteTeamColor, marginLeft: 60 }}>
        Torte
      </Typography>
      <SmalCarousel products={cakes} />
      <Typography variant='h4' style={{ color: WhiteTeamColor, marginLeft: 60 }}>
        Kolači
      </Typography>
      <SmalCarousel products={cookies} />
    </RootNotCentered>
  )
}

export default Home
