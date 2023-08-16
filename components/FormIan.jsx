import { Label } from "@mui/icons-material";
import { Card, Paper, TextField } from "@mui/material";

const FormIan = () => {
	return (
		<Paper className="w-full" >
			<div className="w-full">
				<div >
					<div>
						<h1 className="red_blud_gradient" >Cadastrar Seu Anúncio</h1>
						<p >
							Cadastre e ganhe a primeira mensalidade gratis!
						</p>
					</div>

					<form>
						<TextField
							required
							id="outlined-required"
							label="Required"
							defaultValue="Hello World"
							size="small"
						/>
						<input

							type="text"
							name="Ex :Fulano da Silva"
							placeholder="Ex :Fulano da Silva"
							id=""
						/>
						<br></br>
						<br></br>

						<label >E-mail</label>
						<br></br>
						<input
							type="email"
							placeholder="Ex: fulanodasilva@email.com"
							name=""
							id=""

						/>

						<br></br>
						<br></br>

						<label >Celular (com DDD)</label>
						<br></br>
						<input
							type="text"
							placeholder="Ex: (00) 00000-0000"
							name=""
							id=""

						/>
						<br></br>
						<br></br>
						<p >
							Esse site é protegido pelo reCAPTCHA e está sujeito à Política de
							Privacidade e aos Termos de Serviço do Google.
						</p>

						<button type="submit">
							Cadastrar
						</button>
					</form>
				</div>
			</div>
		</Paper >
	);
};

export default FormIan;
