import { useState,forwardRef } from 'react';
import { Snackbar } from '@mui/material';
import DefaultTextField from "./DefaultTextField";
import MuiAlert from '@mui/material/Alert';
import PurpleButton from "./PurpleButton";

const PreRegisterForm = () => {
	const [name, setName] = useState('');
	const [email, setEmail] = useState('');
	const [phone, setPhone] = useState('');
	const [snackbarOpen, setSnackbarOpen] = useState(false);
	const [snackbarMessage, setSnackbarMessage] = useState('');
	const [snackbarSeverity, setSnackbarSeverity] = useState('success'); 

	const isEmailValid = (email) => {
		return email.includes('@');
	};

	const isPhoneValid = (phone) => {
		const phoneRegex = /^\(\d{2}\)\s?\d{5}-\d{4}$/;
		return phoneRegex.test(phone);
	};

	const isFormValid = () => {
		if (!name || !isEmailValid(email) || !isPhoneValid(phone)) {
			return false;
		}
		return true;
	};

	const handleSendEmail = (e) => {
		e.preventDefault();
		let newSnackbarSeverity = 'success'; 

		if (!isFormValid()) {
			if (!name || !email || !phone) {
				newSnackbarSeverity = 'warning';
				setSnackbarMessage('Por favor, preencha todos os campos corretamente antes de enviar.');
			} else if (!isEmailValid(email)) {
				newSnackbarSeverity = 'warning';
				setSnackbarMessage('Por favor, insira um e-mail válido.');
			} else if (!isPhoneValid(phone)) {
				newSnackbarSeverity = 'warning';
				setSnackbarMessage('Por favor, insira um telefone válido.');
			}
			setSnackbarSeverity(newSnackbarSeverity); 
			setSnackbarOpen(true);
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
				setSnackbarSeverity('success'); 
				setSnackbarMessage('Email enviado com sucesso');
				setSnackbarOpen(true);
			})
			.catch((error) => {
				console.log(error);
				setSnackbarSeverity('error'); 
				setSnackbarMessage('Ocorreu um erro ao enviar o e-mail');
				setSnackbarOpen(true);
			});
	};

	const handleSnackbarClose = (event, reason) => {
		if (reason === 'clickaway') {
			return;
		}

		setSnackbarOpen(false);
	};

	const Alert = forwardRef(function Alert(props, ref) {
		return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
	});

	return (
		<form className="
      w-full
      mt-24 desktop:mt-0
      p-4
      cellphone:w-[20.5rem]
      tablet:w-[25rem]
      desktop:w-[26rem] desktop:pr-[4rem] desktop:pt-12
      flex
      justify-center
      text-center
      flex-wrap
      gap-8
      mb-[5rem]
      desktop:p-0
      bg-base-do-fundo
    ">
			<div className="w-full text-left" >
				<h1 className="w-full text-left font-roboto 
          text-[1.5rem] desktop:text-[2rem]
          mt-0 desktop:mt-8 mb-0
          font-bold text-grafite-80">Cadastrar seu anúncio</h1>
				<p className="w-full text-left font-roboto text-[0.875rem] font-thin mt-0 mb-0 text-grafite-60">Cadastre e ganhe a primeira mensalidade grátis!</p>
			</div>
			<div className="
        w-full
        flex
        justify-center
        text-center
        flex-wrap
        desktop:gap-4
      ">
				<div className="w-full text-left" >
					<label className="w-full text-left font-roboto text-[0.75rem] font-thin mt-0 mb-0 text-grafite-60">Nome Completo</label>
					<DefaultTextField
						placeholder="Ex: Fulano da Silva"
						value={name}
						onChange={(e) => setName(e.target.value)}
					/>
				</div>
				<div className="w-full text-left" >
					<label className="w-full text-left font-roboto text-[0.75rem] font-thin mt-0 mb-0 text-grafite-60">E-mail</label>
					<DefaultTextField
						placeholder="Ex: fulanodasilva@email.com"
						value={email}
						onChange={(e) => setEmail(e.target.value)}
					/>
				</div>
				<div className="w-full text-left" >
					<label className="w-full text-left font-roboto text-[0.75rem] font-thin mt-0 mb-0 text-grafite-60">Celular (com DDD)</label>
					<DefaultTextField
						placeholder="Ex: (00) 00000-0000"
						value={phone}
						onChange={(e) => setPhone(e.target.value)}
					/>                 
					<label className="w-full text-left font-roboto text-[0.75rem] font-thin mt-0 mb-0 text-grafite-60">Esse site é protegido pelo reCAPTCHA e está sujeito à Política de Privacidade e aos Termos de Serviço do Google.</label>
				</div>
			</div>
			<PurpleButton text="Cadastrar" onClick={handleSendEmail} />
			<Snackbar
				anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
				open={snackbarOpen}
				autoHideDuration={4000}
				onClose={handleSnackbarClose}
			>
				<Alert onClose={handleSnackbarClose} severity={snackbarSeverity}>
					{snackbarMessage}
				</Alert>
			</Snackbar>
		</form>
	);
};

export default PreRegisterForm;
