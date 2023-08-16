import * as React from 'react';
import { useState } from 'react';
import { styled } from '@mui/material/styles';
import { Grid, Card, CardContent, TextField, Typography } from '@mui/material';
import { SnackbarProvider, useSnackbar } from 'notistack';

import PurpleButton from './PurpleButton';

const FormContainer = styled(Grid)({
	width: '30rem',
	height: '26.3125rem',
	padding: '0 4rem 0 0',
	borderRadius: '0.25rem',
	gap: '2rem',
	'@media (min-width: 720px)  and (max-width: 1439px)': {
		height: '25rem',
		margin: '0rem 10rem 1.25rem 10rem'
	},
	'@media (min-width: 360px)  and (max-width: 719px)': {
		width: '20.5rem',
		height: '27rem',
		margin: '2.5rem 1rem 10.5rem 3rem'
	},
});

const StyledCard = styled(Card)({
	maxWidth: '37.5rem',
	margin: '0 auto',
});

const StyledTextField = styled(TextField)(({ theme }) => ({
	marginBottom: '1rem',
	'& .MuiInputLabel-root': {
		transform: 'translate(0, -120%)',
		color: 'rgba(30, 30, 30, 0.60)', 
	},
}));

const TitleContainer = styled('div')({
	display: 'flex',
	flexDirection: 'column',
	alignSelf: 'stretch',
});

const StyledTitle = styled(Typography)({
	color: 'var(--primrio-80, rgba(30, 30, 30, 0.80))',
	fontSize: '2.25rem',
	fontFamily: 'Roboto',
	fontStyle: 'normal',
	fontWeight: 700,
	lineHeight: 'normal',
	marginBottom: '1rem',
	'@media (min-width: 360px)  and (max-width: 719px)': {
		fontSize: '1.5rem',
	},
});

const StyledSubtitle = styled(Typography)({
	color: 'var(--primrio-desabilitado-60, rgba(30, 30, 30, 0.60))',
	fontSize: '0.875rem',
	fontFamily: 'Roboto',
	fontStyle: 'normal',
	fontWeight: 400,
	lineHeight: 'normal',
	marginBottom: '2rem',
});

const PrivacyText = styled(Typography)({
	color: 'var(--primrio-desabilitado-60, rgba(30, 30, 30, 0.60))',
	fontSize: '0.75rem',
	fontFamily: 'Roboto',
	fontStyle: 'normal',
	fontWeight: 400,
	lineHeight: 'normal',
	marginBottom: '1rem',
	display: 'flex',
	flexDirection: 'column',
	justifyContent: 'center',
	alignSelf: 'stretch',
});

const ButtonContainer = styled(Grid)({
	display: 'flex',
	justifyContent: 'center',
});

const Form = () => {
	const [name, setName] = useState('');
	const [email, setEmail] = useState('');
	const [phone, setPhone] = useState('');
	const { enqueueSnackbar } = useSnackbar();

	const handleSendEmail = (e) => {
		e.preventDefault();
		if (!name || !email || !phone) {
			enqueueSnackbar('Por favor, preencha todos os campos antes de enviar.', { variant: 'warning' });
			return;
		  }
		  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
		  if (!emailRegex.test(email)) {
			enqueueSnackbar('Por favor, insira um e-mail válido.', { variant: 'error' });
			return;
		  }
		  const phoneRegex = /^\(\d{2}\)\d{5}-\d{4}$/;
		  if (!phoneRegex.test(phone)) {
			enqueueSnackbar('Por favor, insira um telefone válido', { variant: 'error' });
			return;
		  }
		fetch('/api', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify({
				name,
				email,
				phone,
			}),
		})
			.then((response) => {
				console.log(response);
				enqueueSnackbar('Email enviado com sucesso', { variant: 'success' });
			})
			.catch((error) => {
				console.log(error);
				enqueueSnackbar('Ocorreu um erro ao enviar o e-mail', { variant: 'error' });
			});
	};

	return (
		<FormContainer container justifyContent="center">
			<StyledCard>
				<CardContent>
					<TitleContainer>
						<StyledTitle variant="h1">Cadastrar seu Anúncio</StyledTitle>
						<StyledSubtitle variant="body1">
              Cadastre e ganhe a primeira mensalidade grátis!
						</StyledSubtitle>
					</TitleContainer>
					<form>
						<Grid container spacing={2}>
							<Grid item xs={12} sm={12}>
								<StyledTextField
									fullWidth
									label="Nome Completo"
									placeholder="Ex: Fulano da Silva"
									variant="outlined"
									value={name}
									onChange={(e) => setName(e.target.value)}
								/>
							</Grid>
							<Grid item xs={12} sm={12}>
								<StyledTextField
									fullWidth
									label="E-mail"
									placeholder="Ex: fulanodasilva@email.com"
									variant="outlined"
									value={email}
									onChange={(e) => setEmail(e.target.value)}
								/>
							</Grid>
							<Grid item xs={12} sm={12}>
								<StyledTextField
									fullWidth
									label="Celular (com DDD)"
									placeholder="Ex: (00) 00000-0000"
									variant="outlined"
									value={phone}
									onChange={(e) => setPhone(e.target.value)}
								/>
							</Grid>
							<Grid item xs={12} sm={12}>
								<PrivacyText variant="body2">
                  Esse site é protegido pelo reCAPTCHA e está sujeito à Política de Privacidade e aos Termos de Serviço do Google.
								</PrivacyText>
							</Grid>
							<ButtonContainer item xs={12} sm={12}>
								<PurpleButton text="Cadastrar" onClick={handleSendEmail} />

							</ButtonContainer>
						</Grid>
					</form>
				</CardContent>
			</StyledCard>
		</FormContainer>
	);
};

const App = () => {
	return (
		<SnackbarProvider maxSnack={3} anchorOrigin={{ vertical: 'top', horizontal: 'center' }}> 
			<Form />
		</SnackbarProvider>
	);
};

export default App;
