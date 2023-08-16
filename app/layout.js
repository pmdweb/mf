"use client"
import '../styles/globals.css'
import { Inter } from 'next/font/google'
import mfTheme from '@utils/theme'
import { createTheme, ThemeProvider, StyledEngineProvider } from '@mui/material/styles'
import { CssBaseline } from '@mui/material'

const inter = Inter({ subsets: ['latin'] })

export default function RootLayout({ children }) {
	return (
		<html lang="en">
			<body className={[inter.className, "p-0 m-0 flex justify-center bg-black"]}>
				<StyledEngineProvider injectFirst>
					<ThemeProvider theme={mfTheme}>
						<CssBaseline />
						{children}
					</ThemeProvider>
				</StyledEngineProvider>
			</body>
		</html>
	)
}
