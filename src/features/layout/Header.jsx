'use client'
import { DesktopMenu, Logo, SearchBox } from '@/features/layout'
import { AppBar, Box } from '@mui/material'

export default function Header() {
  return (
    <Box component="header">
      <AppBar
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
        <Box>
          <SearchBox />
        </Box>
      </AppBar>
    </Box>
  )
}
