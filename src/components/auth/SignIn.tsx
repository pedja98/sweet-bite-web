import { Button, Card, CardActions, CardContent, FormControl, InputLabel, Typography } from '@mui/material'
import { LinkStyled, MenuItemStyled, Root, SelectStyled, TextFieldStyled } from '../../styles/common'
import { SignInButtonStyles, SignInCartContextAndActionStyles, SignInFieldStyles } from '../../constants/signIn'

const SignIn = () => {
  return (
    <Card
      variant='outlined'
      sx={{
        maxWidth: 310,
        maxHeight: 635,
        display: 'flex',
        flexDirection: 'column',
        paddingTop: '1.5%',
      }}
    >
      <CardContent sx={SignInCartContextAndActionStyles}>
        <Root>
          <Typography variant='h5'>DOBRODOŠLI</Typography>
        </Root>
        <TextFieldStyled sx={SignInFieldStyles} id='username' label='Korisničko ime' />
        <TextFieldStyled sx={SignInFieldStyles} id='password' label='Lozinka' type='password' />
        <FormControl sx={SignInFieldStyles} size='small'>
          <InputLabel id='type'>Tip korisnika</InputLabel>
          <SelectStyled labelId='type' id='type' label='Type'>
            <MenuItemStyled value=''>
              <em>Nijedan</em>
            </MenuItemStyled>
            <MenuItemStyled value={'kupac'}>Kupac</MenuItemStyled>
            <MenuItemStyled value={'zaposleni'}>Zaposleni</MenuItemStyled>
          </SelectStyled>
        </FormControl>
      </CardContent>
      <LinkStyled to='/sign-up'>Nemate nalog?</LinkStyled>
      <CardActions sx={SignInCartContextAndActionStyles}>
        <Button sx={SignInButtonStyles}>Prijavi se</Button>
      </CardActions>
    </Card>
  )
}

export default SignIn
