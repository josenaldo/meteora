'use client'
import { DesktopMenu, Logo, SearchBox } from '@/features/layout'
import { AppBar, Box } from '@mui/material'

export default function Header() {
  return (
    <Box component="header">
      <AppBar
        elevation={0}
        position="static"
        sx={{
          backgroundColor: 'common.black',
          height: '58px',
          display: 'flex',
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
          px: 3,
        }}
      >
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'row',
            gap: 3,
          }}
        >
          <Logo />
          <DesktopMenu />
        </Box>
        <Box sx={{ display: { xs: 'none', sm: 'flex' } }}>
          <SearchBox />
        </Box>
      </AppBar>
      <Box
        sx={{
          display: { xs: 'flex', sm: 'none' },
          padding: 3,
        }}
      >
        <SearchBox buttonColor="black" />
      </Box>
    </Box>
  )
}
