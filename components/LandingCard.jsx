"use client"
import { styled } from '@mui/material/styles';
import { Card, Chip, Typography } from '@mui/material';
import { Roboto } from 'next/font/google';
import { useTheme } from '@emotion/react';

const StyledLandingCard = styled(Card)(({ theme }) => ({
	height: 'calc(140px+48px)',
	width: 'calc(270px+48px)',
	padding: '1.5rem',
	fontFamily: 'Roboto',
	borderRadius: '.75rem',
	boxShadow: '0px 0px 20px 0px rgba(0, 0, 0, 0.15)',
	zIndex: '100 !important',
}));
const StyledChip = styled(Chip)(({ theme }) => ({
	height: '48px',
	width: '48px',
	marginBottom:'8px'
}));
const Title = styled(Typography)(({ theme }) => ({
	fontFamily: 'Roboto,Arial,sans-serif',
	fontSize: '16px',
	fontStyle: 'normal',
	fontWeight: '700',
	lineHeight: 'normal',
}));

const LandingCard = ({ title, body, chipColor }) => {
	return (
		<StyledLandingCard>
			<StyledChip sx={{backgroundColor:`${chipColor}`}} />
			<Title >{title}</Title>
			<Typography variant='body2'>{body}</Typography>
		</StyledLandingCard>
	);
}

export default LandingCard;