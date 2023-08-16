import React from "react";
import { Typography ,Link,TextField, IconButton } from "@mui/material";
import { FileCopy as FileCopyIcon } from "@mui/icons-material";
import MiniLogo from "./MiniLogo";

const Footer = () => {
	return (
		<footer className="
			flex flex-col
			desktop:flex-row 
			tablet:flex-row
			items-center 
			m-0
			px-[1rem] tablet:px-[2rem] desktop:px-[4rem]
			py-[.25rem] tablet:py-[.5rem] desktop:py-[1.5rem]
			w-[calc(100% - 8rem)]
			bg-[#1e1e1e]"
		>
			<div className="
			pt-1 
			desktop:w-1/3
			tablet:w-1/4
			"
			>
				<MiniLogo text="logo" logo="logo2" />
			</div>
			<div className="
				font-roboto
				 text-gray-700
				flex
				desktop:w-2/3
				tablet:w-3/4
				pt-4
				text-sm
			    tablet:text-right
				cellphone:text-center
				 "
			>
				@ 2023 Minhas Festa. Todos os direitos reservados
			</div>
		</footer>
	);
};

export default Footer;
