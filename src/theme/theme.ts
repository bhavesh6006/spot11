import { createTheme } from '@mui/material/styles'

export const theme = createTheme({
  palette: { mode: 'dark', primary: { main: '#f7f7f3' }, background: { default: '#0a0a0a', paper: '#1f1f1f' }, text: { primary: '#f7f7f3', secondary: '#b7b7b2' } },
  typography: { fontFamily: 'DM Sans, sans-serif' },
  shape: { borderRadius: 0 },
})