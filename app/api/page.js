import config from '@config.local'
import nodemailer from 'nodemailer';

export default function sendEmail(req, res) {
	const transporter = nodemailer.createTransport({
		host: 'smtp.titan.email',
		port: 587,
		secure: false,
		auth: {
			user: config.USERMAIL,
			pass: config.PASS,
		},
	});


	const mailOptions = {
		from: config.USERMAIL,
		to: config.USERMAIL,
		subject: 'Cadastro Realizado com Sucesso',
		text: 'Parabens seu cadastro foi efetivado',
	};

	transporter.sendMail(mailOptions, (error, info) => {
		if (error) {
			console.log(error);
			res.status(500).json({ error: 'Ocorreu um erro ao enviar o e-mail' });
		} else {
			console.log('E-mail enviado com sucesso', info.response);
			res.status(200).json({ message: 'E-mail enviado com sucesso' });
		}
	});
}
