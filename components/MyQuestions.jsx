import React, { useState } from "react";
import { Typography, Button, IconButton } from "@mui/material";
import { FileCopy as FileCopyIcon } from "@mui/icons-material";

const MyQuestions = () => {
	const [email, setEmail] = useState("suporte@minhafesta.com.br");

	const handleCopyEmail = () => {
		navigator.clipboard.writeText(email);
	};

	return (
		<div className="flex flex-col  flex-auto  tablet:self-stretch cellphone:self-stretch desktop:w-[309px] tablet:w-[624px] cellphone:w-fit p-6 gap-4  bg-gray-rgba">
			<Typography variant="subtitle2" className="text-white  ">
        Ainda tem dúvida?
			</Typography>
			<div className="flex items-center p-2 gap-2 self-stretch rounded-md border-[1.5px]  bg-white text-sm">
				<Button
					variant="text"
					className="tablet:text-center tablet:w-[560px]"
					style={{
						fontSize: '14px',
						color: '#1E1E1E',
						textTransform: 'none',
					}}
					onClick={handleCopyEmail}
				>
					{email}
				</Button>
				<button onClick={handleCopyEmail} className="icon-button  bg-transparent border-none">
					<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
						<path d="M14.167 11.1666V13.6666C14.167 16.9999 12.8337 18.3333 9.50033 18.3333H6.33366C3.00033 18.3333 1.66699 16.9999 1.66699 13.6666V10.4999C1.66699 7.16659 3.00033 5.83325 6.33366 5.83325H8.83366" stroke="#1E1E1E" strokeOpacity="0.8" strokeLinecap="round" strokeLinejoin="round"/>
						<path d="M9.66634 1.66675H12.9997M5.83301 4.16675C5.83301 2.78341 6.94967 1.66675 8.33301 1.66675H10.5163M18.333 6.66675V11.8251C18.333 13.1167 17.283 14.1667 15.9913 14.1667M18.333 6.66675H15.833C13.958 6.66675 13.333 6.04175 13.333 4.16675V1.66675L18.333 6.66675ZM14.1663 11.1667H11.4997C9.49967 11.1667 8.83301 10.5001 8.83301 8.50008V5.83341L14.1663 11.1667Z" stroke="#1E1E1E" strokeOpacity="0.8" strokeLinecap="round" strokeLinejoin="round"/>
					</svg>
				</button>

			</div>
			<Typography variant="body2" className="text-linha-myquestion ">
        Se ainda não encontrou resposta para sua dúvida no FAQ, nos envie um e-mail. Estaremos prontos para atender sua solicitação.
			</Typography>
		</div>
	);
};

export default MyQuestions;
