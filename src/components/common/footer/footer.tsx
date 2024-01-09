import { Typography } from '@mui/material'
import FacebookIcon from '@mui/icons-material/Facebook'
import InstagramIcon from '@mui/icons-material/Instagram'
import WhatsAppIcon from '@mui/icons-material/WhatsApp'
import {
  FooterLocationElement,
  FooterRoot,
  FooterRootElement,
  FooterSocialMediaAndAuthorElement,
} from '../../../styles/footer'
const Footer = () => {
  return (
    <FooterRoot>
      <FooterRootElement>
        <FooterLocationElement>
          <Typography variant='subtitle1'>
            <b>Novi Beograd</b>
          </Typography>
          <Typography variant='subtitle2'>
            <b>
              Bulevar Mihajla Pupina 165v011 <br />
              222 5467 / 065 222 5467
            </b>
          </Typography>
        </FooterLocationElement>
        <FooterLocationElement>
          <Typography variant='subtitle1'>
            <b>Zemun</b>
          </Typography>
          <Typography variant='subtitle2'>
            <b>
              Cara Dušana 204 <br />
              222 5464 / 065 222 5464
            </b>
          </Typography>
        </FooterLocationElement>
      </FooterRootElement>
      <FooterSocialMediaAndAuthorElement>
        <div>
          <FacebookIcon />
          <InstagramIcon />
          <WhatsAppIcon />
        </div>
        <Typography sx={{ marginTop: '18px' }} variant='subtitle2'>
          © Copyright 2023, Predrag Mirković 3370/2023
        </Typography>
      </FooterSocialMediaAndAuthorElement>
    </FooterRoot>
  )
}

export default Footer
