import { useAppSelector } from '../../../app/hooks'
import { selectProductByType } from '../../../features/products/products.slelectors'
import { Root } from '../../../styles/common'
import BigCarousel from '../../common/bigCarousel/BigCarousel'
import SmalCarousel from '../../common/smalCarousel/SmalCarousel'

const Home = () => {
  const cookies = useAppSelector(selectProductByType({ type: 'kolač' }))
  const cakes = useAppSelector(selectProductByType({ type: 'torta' }))
  return (
    <Root>
      <BigCarousel />
      <SmalCarousel products={cakes} />
      <SmalCarousel products={cookies} />
    </Root>
  )
}

export default Home
