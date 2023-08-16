import { createTheme } from '@mui/material/styles';

const mfTheme = createTheme({
	palette: {
		primary: {
			main: '#F85412',
		},
		secondary: {
			main: '#00AB84',
		},
		OrangeChip: {
			main: '#F85412',
		},
		// Add more color variants as needed
	},
	breakpoints: {
		values: {
			xs: 0,
			cellphone: 360,
			sm: 480,
			tablet: 720,
			md: 768,
			lg: 992,
			xl: 1200,
			desktop: 1440,
		},
	},
});

export default mfTheme;