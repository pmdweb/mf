import { styled } from '@mui/material/styles';
import { Card, Typography } from '@mui/material';
import { Roboto } from 'next/font/google';
import { useTheme } from '@emotion/react';
import Image from 'next/image';

const StyledImageCard = styled(Card)(({ theme }) => ({
	width: '300px',
	height: '360px',
	color: 'rgba(255,255,255,.75)',
	marginTop: '-8rem',
	borderRadius: '.44rem',
	backgroundColor: '#000',
	display: 'flex',
	flexDirection: 'column',
	justifyContent: 'flex-end',
}));

const Title = styled(Typography)(({ theme }) => ({
	fontFamily: 'Roboto,Arial,sans-serif',
	fontSize: '16px',
	paddingLeft: '.5rem',
	paddingBottom: '.25rem',
	fontStyle: 'normal',
	fontWeight: '700',
	lineHeight: 'normal',
	textTransform: 'uppercase',
	marginTop: 'auto',
}));
const Text = styled(Typography)(({ theme }) => ({
	fontFamily: 'Roboto,Arial,sans-serif',
	fontSize: '16px',
	paddingLeft: '.5rem',
	paddingTop: '.5rem',
	fontStyle: 'normal',
}));

const CategoryCard = ({ title, body, src }) => {
	return (
		<StyledImageCard>
			<Image width={300} height={250} alt={'Categorias'} src={src} />
			<Text>{body}</Text>
			<Title>{title}</Title>
		</StyledImageCard>
	);
}

export default CategoryCard;
