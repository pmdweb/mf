import { styled } from '@mui/material/styles';
import Button from '@mui/material/Button';

const ColorButton = styled(Button)(({ theme }) => ({
	color: theme.palette.getContrastText("#874BF6"),
	width: '218px',
	height: '43px',
	fontSize: '1rem',
	fontFamily: 'Roboto, Verdana, Arial',
	padding: '.75rem 1rem',
	justifyContent: 'center',
	alignItems: 'center',
	textTransform: 'none',
	backgroundColor: "#874BF6",
	'&:hover': {
		backgroundColor: "#6E36DF",
	},
	[theme.breakpoints.up('tablet')]: {
		// Apply tablet styles here
		fontFamily: 'Roboto, Verdana, Arial',
		padding: '.5rem .75rem',
		fontSize:'14px',
	},
}));

const PurpleButton = ({ text, link, variant, onClick }) => {
	return (
		<ColorButton variant={variant} href={link} onClick={onClick}>
			{text}
		</ColorButton>
	);
};

export default PurpleButton;
