import * as React from 'react'
import AppBar from '@mui/material/AppBar'
// import Box from '@mui/material/Box'
import Toolbar from '@mui/material/Toolbar'
// import IconButton from '@mui/material/IconButton'
import Typography from '@mui/material/Typography'
// import Menu from '@mui/material/Menu'
// import MenuIcon from '@mui/icons-material/Menu'
import Container from '@mui/material/Container'
// import Avatar from '@mui/material/Avatar'
// import Button from '@mui/material/Button'
// import Tooltip from '@mui/material/Tooltip'
// import MenuItem from '@mui/material/MenuItem'
import AdbIcon from '@mui/icons-material/Adb'

// const pages = ['Test']
// const settings = ['test1', 'test2', 'test3']

function Nav() {
  // const [anchorElNav, setAnchorElNav] = React.useState(null)
  // const [anchorElUser, setAnchorElUser] = React.useState(null)

  // const handleOpenNavMenu = (event) => {
  //   setAnchorElNav(event.currentTarget)
  // }
  // // const handleOpenUserMenu = (event) => {
  // //   setAnchorElUser(event.currentTarget)
  // // }

  // const handleCloseNavMenu = () => {
  //   setAnchorElNav(null)
  // }

  // const handleCloseUserMenu = () => {
  //   setAnchorElUser(null)
  // }

  return (
    <AppBar position='static'>
      <Container maxWidth='xl'>
        <Toolbar disableGutters>
          <AdbIcon sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }} />
          <Typography
            variant='h6'
            noWrap
            component='a'
            href='/'
            sx={{
              mr: 2,
              display: { xs: 'none', md: 'flex' },
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            Home
          </Typography>


          <AdbIcon sx={{ display: { xs: 'flex', md: 'none' }, mr: 1 }} />
          <Typography
            variant='h5'
            noWrap
            component='a'
            href=''
            sx={{
              mr: 2,
              display: { xs: 'flex', md: 'none' },
              flexGrow: 1,
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            Home
          </Typography>



        </Toolbar>
      </Container>
    </AppBar>
  )
}
export default Nav
